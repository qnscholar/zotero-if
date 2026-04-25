ZoteroIF_MenuPopup = {
    _store_added_elements: [],
    _registeredMenuIDs: [],

    _getWindow() {
        var enumerator = Services.wm.getEnumerator("navigator:browser");
        while (enumerator.hasMoreElements()) {
            let win = enumerator.getNext();
            if (!win.ZoteroPane) continue;
            return win;
        }
    },

    init() {
        if (this._registerWithMenuManager()) {
            return;
        }

        let win = this._getWindow();
        let doc = win.document;

        // Menu separator
        let menuseparator = doc.createXULElement('menuseparator');

        // Menu item
        let updateIFs_item = doc.createXULElement('menuitem');
        updateIFs_item.id = 'zoteroif-menuitem-updateIFs';
        updateIFs_item.setAttribute('data-l10n-id', 'zotero-zoteroif-update-if');
        updateIFs_item.addEventListener('command', () => {
            Zotero.ZoteroIF.updateSelectedItemsIF();
        });

        let zotero_itemmenu = doc.getElementById('zotero-itemmenu');
        zotero_itemmenu.appendChild(menuseparator);
        zotero_itemmenu.appendChild(updateIFs_item);

        this._store_added_elements.push(menuseparator, updateIFs_item);

        // Enable localization
        win.MozXULElement.insertFTLIfNeeded('zoteroif_preferences.ftl');
    },

    _registerWithMenuManager() {
        if (!Zotero.MenuManager || !Zotero.MenuManager.registerMenu) {
            return false;
        }

        let win = this._getWindow();
        if (win && win.MozXULElement) {
            win.MozXULElement.insertFTLIfNeeded('zoteroif_preferences.ftl');
        }

        let updateSelectedItemsIF = () => {
            Zotero.ZoteroIF.updateSelectedItemsIF();
        };

        let configureMenuItem = (event, context) => {
            let menuElem = context && context.menuElem;
            if (menuElem) {
                menuElem.setAttribute('label', '更新 IF / 分区 [Zotero IF]');
            }
            let enabled = this._hasSelectedRegularItems(context);
            if (context && context.setEnabled) {
                context.setEnabled(enabled);
            }
            if (context && context.setVisible) {
                context.setVisible(enabled);
            }
        };

        let menus = [
            {
                menuID: 'zoteroif-update-library-item',
                pluginID: 'zoteroif@qnscholar',
                target: 'main/library/item',
                menus: [
                    {
                        menuType: 'menuitem',
                        icon: 'chrome://zoteroif/content/icons/favicon.png',
                        onShowing: configureMenuItem,
                        onCommand: updateSelectedItemsIF
                    }
                ]
            },
            {
                menuID: 'zoteroif-update-tools-menu',
                pluginID: 'zoteroif@qnscholar',
                target: 'main/menubar/tools',
                menus: [
                    {
                        menuType: 'menuitem',
                        icon: 'chrome://zoteroif/content/icons/favicon.png',
                        enableForTabTypes: ['library'],
                        onShowing: configureMenuItem,
                        onCommand: updateSelectedItemsIF
                    }
                ]
            }
        ];

        for (let menu of menus) {
            let registeredID = Zotero.MenuManager.registerMenu(menu);
            if (registeredID) {
                this._registeredMenuIDs.push(menu.menuID);
            }
        }

        return this._registeredMenuIDs.length > 0;
    },

    _hasSelectedRegularItems(context) {
        let items = context && context.items;
        if (!items) {
            let pane = Zotero.getActiveZoteroPane && Zotero.getActiveZoteroPane();
            items = pane && pane.getSelectedItems ? pane.getSelectedItems() : [];
        }
        return items.some(item => item && item.isRegularItem && item.isRegularItem());
    },

    destroy() {
        for (let menuID of this._registeredMenuIDs) {
            Zotero.MenuManager.unregisterMenu(menuID);
        }
        this._registeredMenuIDs = [];

        let win = this._getWindow();
        let doc = win && win.document;
        for (let element of this._store_added_elements)
        {
            if (element) element.remove();
        }
        let ftl = doc && doc.querySelector('[href="zoteroif_preferences.ftl"]');
        if (ftl) {
            ftl.remove();
        }
    }
}
