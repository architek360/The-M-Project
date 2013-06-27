require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "../vendor/libs",
            "main": "backbone-1.0.0.js"
        },
        {
            "name": "backbone.layoutmanager",
            "location": "../vendor/libs",
            "main": "backbone.layoutmanager.js"
        },
        {
            "name": "backbone.stickit",
            "location": "../vendor/libs",
            "main": "backbone.stickit-0.6.3.js"
        },
        {
            "name": "backbone.sticktpl",
            "location": "../vendor/libs",
            "main": "backbone.sticktpl-0.0.0.0.1.js"
        },
        {
            "name": "jquery",
            "location": "../vendor/libs",
            "main": "jquery-2.0.0.min.js"
        },
        {
            "name": "underscore",
            "location": "../vendor/libs",
            "main": "underscore-1.4.4.min.js"
        },
        {
            "name": "quo",
            "location": "../vendor/libs",
            "main": "quo-2.3.1.js"
        },
        {
            "name": "M",
            "location": "../vendor/core",
            "main": "m"
        },
        {
            "name": "M.CONST",
            "location": "../vendor/core",
            "main": "const"
        },
        {
            "name": "M.ObjectID",
            "location": "../vendor/utility",
            "main": "objectid"
        },
        {
            "name": "M.Object",
            "location": "../vendor/core",
            "main": "object"
        },
        {
            "name": "M.Collection",
            "location": "../vendor/data",
            "main": "collection"
        },
        {
            "name": "M.Model",
            "location": "../vendor/data",
            "main": "model"
        },
        {
            "name": "M.Field",
            "location": "../vendor/data",
            "main": "field"
        },
        {
            "name": "M.Entity",
            "location": "../vendor/data",
            "main": "entity"
        },
        {
            "name": "M.DataSelector",
            "location": "../vendor/data",
            "main": "data_selector"
        },
        {
            "name": "M.Store",
            "location": "../vendor/data/stores",
            "main": "store"
        },
        {
            "name": "M.SocketStore",
            "location": "../vendor/data/stores",
            "main": "socket"
        },
        {
            "name": "M.LocalStorageStore",
            "location": "../vendor/data/stores",
            "main": "local_storage"
        },
        {
            "name": "M.SocketIO",
            "location": "../vendor/connection",
            "main": "socket_io"
        },
        {
            "name": "M.EventDispatcher",
            "location": "../vendor/core",
            "main": "event_dispatcher"
        },
        {
            "name": "M.ViewManager",
            "location": "../vendor/core",
            "main": "view_manager"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore", "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.layoutmanager": {
            "deps": [
                "jquery", "backbone", "underscore"
            ],
            "exports": "Backbone.Layout"
        },
        "backbone.stickit": {
            "deps": [
                "jquery", "backbone", "underscore"
            ],
            "exports": "Backbone.Stickit"
        },
        "backbone.sticktpl": {
            "deps": [
                "jquery", "backbone", "underscore"
            ],
            "exports": "_.tpl"
        },
        "underscore": {
            "exports": "_"
        },
        "quo": {
            "deps": [
                "jquery"
            ],
            "exports": "quo"
        },

        "M": {
            "exports": "M"
        },
        "M.CONST": {
            "deps": [
                "M"
            ],
            "exports": "M.CONST"
        },
        "M.Object": {
            "deps": [
                "M",
                "M.CONST"
            ],
            "exports": "M.Object"
        },
        "M.SocketStore": {
            "deps": [
                "M.Object",
                "M.SocketIO",
                "M.Store",
                "M.LocalStorageStore"
            ],
            "exports": "M.SocketStore"
        },
        "M.LocalStorageStore": {
            "deps": [
                "M.Object",
                "M.Store"
            ],
            "exports": "M.LocalStorageStore"
        },
        "M.SocketIO": {
            "deps": [
                "M.Object"
            ],
            "exports": "M.SocketIO"
        },
        "M.Store": {
            "deps": [
                "M.Object",
                "M.Collection"
            ],
            "exports": "M.Store"
        },
        "M.Collection": {
            "deps": [
                "M.Object",
                "M.Entity",
                "M.Model",
                "M.DataSelector"
            ],
            "exports": "M.Collection"
        },
        "M.DataSelector": {
            "deps": [
                "M.Object"
            ],
            "exports": "M.DataSelector"
        },
        "M.Entity": {
            "deps": [
                "M.Object",
                "M.Field"
            ],
            "exports": "M.Entity"
        },
        "M.Field": {
            "deps": [
                "M.Object"
            ],
            "exports": "M.Field"
        },
        "M.Model": {
            "deps": [
                "M.Entity",
                "M.Object",
                "M.ObjectID",
                "backbone",
                "underscore"
            ],
            "exports": "M.Model"
        },
        "M.EventDispatcher": {
            "deps": [
                "M.Object"
            ],
            "exports": "M.EventDispatcher"
        },
        "M.ViewManager": {
            "deps": [
                "M.Object"
            ],
            "exports": "M.ViewManager"
        }
    }
});