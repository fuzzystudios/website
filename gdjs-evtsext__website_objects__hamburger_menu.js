
gdjs.evtsExt__website_objects__hamburger_menu = gdjs.evtsExt__website_objects__hamburger_menu || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu = class hamburger_menu extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.padding_top = objectData.content.padding_top !== undefined ? objectData.content.padding_top : Number("") || 0;
    this._objectData.padding_buttons = objectData.content.padding_buttons !== undefined ? objectData.content.padding_buttons : Number("") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.padding_top !== newObjectData.content.padding_top)
      this._objectData.padding_top = newObjectData.content.padding_top;
    if (oldObjectData.content.padding_buttons !== newObjectData.content.padding_buttons)
      this._objectData.padding_buttons = newObjectData.content.padding_buttons;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getpadding_top() {
    return this._objectData.padding_top !== undefined ? this._objectData.padding_top : Number("") || 0;
  }
  _setpadding_top(newValue) {
    this._objectData.padding_top = newValue;
  }
  _getpadding_buttons() {
    return this._objectData.padding_buttons !== undefined ? this._objectData.padding_buttons : Number("") || 0;
  }
  _setpadding_buttons(newValue) {
    this._objectData.padding_buttons = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDcontactObjects2= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("home"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHome = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.GDcontactObjects2.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedHomeContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects2= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("contact"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContact = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.GDcontactObjects2.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedContactContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDcontactObjects2= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("press"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPress = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.GDcontactObjects2.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.IsClickedPressContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDcontactObjects2= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546mouseOnMenuContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDObjectObjects1});
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546mouseOnMenuContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenu = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.GDcontactObjects2.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.mouseOnMenuContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects4= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546onCreatedContext_9546GDhomeObjects3ObjectsGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546onCreatedContext_9546GDpressObjects3ObjectsGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546onCreatedContext_9546GDcontactObjects3Objects = Hashtable.newFrom({"home": gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3, "press": gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3, "contact": gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3});
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(eventsFunctionContext.getObjects("contact"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("home"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("press"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].getVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].getVariables().get("ordered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].getVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].getVariables().get("ordered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].getVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].getVariables().get("ordered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length = k;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].getVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].getVariables().get("ordered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].getVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].getVariables().get("ordered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].getVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].getVariables().get("ordered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546onCreatedContext_9546GDhomeObjects3ObjectsGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546onCreatedContext_9546GDpressObjects3ObjectsGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595hamburger_9595menu_9546hamburger_9595menu_9546prototype_9546onCreatedContext_9546GDcontactObjects3Objects, 0, 0, false);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].returnVariable(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].getVariables().get("order")).setNumber(eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].returnVariable(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].getVariables().get("order")).setNumber(eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].returnVariable(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].getVariables().get("order")).setNumber(eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber());
}
}{eventsFunctionContext.localVariables[1].getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].setVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3[i].getVariables().get("ordered"), true);
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].setVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3[i].getVariables().get("ordered"), true);
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].setVariableBoolean(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3[i].getVariables().get("ordered"), true);
}
}
{ //Subevents: 
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3[0].getWidth()));
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3[0].getHeight()));
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("index", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects2);
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects2[i].setPosition(0,0);
}
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("width", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("height", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects2[i].position_buttons((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects1[i].adjust_width((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDhomeObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDNewPanelSpriteObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDpressObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.GDcontactObjects4.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.onCreatedContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount0_3 = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount1_3 = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount2_3 = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3 = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3 = [];

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachTotalCount3 = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects5= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects6= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects6= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects6= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects6= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects6= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.localVariables[0].getFromIndex(2), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4, gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5);

gdjs.copyArray(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4, gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5);

gdjs.copyArray(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4, gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5);

{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5[i].setY(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5[i].setY(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5[i].setY(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}
}{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5.length === 0 ) ? (( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5.length === 0 ) ? (( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5[0].getAABBBottom()) :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5[0].getAABBBottom()) :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5[0].getAABBBottom()) + eventsFunctionContext.getObjects("Object")[0]._getpadding_buttons());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.localVariables[0].getFromIndex(2), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5);
gdjs.copyArray(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4, gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5);

gdjs.copyArray(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4, gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5);

gdjs.copyArray(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4, gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5);

{eventsFunctionContext.localVariables[0].getFromIndex(2).setBoolean(true);
}{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5[i].setY((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5[0].getY()) + eventsFunctionContext.getObjects("Object")[0]._getpadding_top());
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5[i].setY((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5[0].getY()) + eventsFunctionContext.getObjects("Object")[0]._getpadding_top());
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5[i].setY((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5[0].getY()) + eventsFunctionContext.getObjects("Object")[0]._getpadding_top());
}
}{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5.length === 0 ) ? (( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5.length === 0 ) ? (( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5[0].getAABBBottom()) :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5[0].getAABBBottom()) :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5[0].getAABBBottom()) + eventsFunctionContext.getObjects("Object")[0]._getpadding_buttons());
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(1).add(1);
}}

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("contact"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("home"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("press"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4[i].getVariableNumber(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4[i].getVariables().get("order")) == eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4[i].getVariableNumber(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4[i].getVariables().get("order")) == eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4[i].getVariableNumber(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4[i].getVariables().get("order")) == eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("contact"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("home"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("press"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects2);

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachTotalCount3 = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount0_3 = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects2.length;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachTotalCount3 += gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount0_3;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3.push.apply(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3,gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects2);
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount1_3 = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects2.length;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachTotalCount3 += gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount1_3;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3.push.apply(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3,gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects2);
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount2_3 = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects2.length;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachTotalCount3 += gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount2_3;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3.push.apply(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3,gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects2);
for (gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3 = 0;gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3 < gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachTotalCount3;++gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3) {
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3.length = 0;


if (gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3 < gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount0_3) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3.push(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3[gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3]);
}
else if (gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3 < gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount0_3+gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount1_3) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3.push(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3[gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3]);
}
else if (gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3 < gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount0_3+gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount1_3+gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachCount2_3) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3.push(gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachObjects3[gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.forEachIndex3]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() <= ((gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3.length === 0 ) ? ((gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3.length === 0 ) ? ((gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3[0].getVariables()) : gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3[0].getVariables()) : gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3[0].getVariables()).get("order").getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(((gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3.length === 0 ) ? ((gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3.length === 0 ) ? ((gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3[0].getVariables()) : gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3[0].getVariables()) : gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3[0].getVariables()).get("order").getAsNumber());
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() <= eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("contact"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("home"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("press"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1[0].getWidth()) - (eventsFunctionContext.getObjects("Object")[0]._getpadding_buttons() * 2));
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1[0].getWidth()) - (eventsFunctionContext.getObjects("Object")[0]._getpadding_buttons() * 2));
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1[0].getWidth()) - (eventsFunctionContext.getObjects("Object")[0]._getpadding_buttons() * 2));
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1[i].setCenterXInScene((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1[0].getCenterXInScene()));
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1[i].setCenterXInScene((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1[0].getCenterXInScene()));
}
for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1[i].setCenterXInScene((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1[0].getCenterXInScene()));
}
}}

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("index", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("count", variable);
}
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("_1stButton", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("nextPos", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttons = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects5.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDhomeObjects6.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects5.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDNewPanelSpriteObjects6.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects5.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDpressObjects6.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects4.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects5.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.GDcontactObjects6.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.position_buttonsContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDhomeObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDpressObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDcontactObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDcontactObjects3= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2[0].getWidth()) != (( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[0].getAABBRight()) - (( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[0].getAABBLeft()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2[i].adjust_width((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects1[i].position_buttons((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDhomeObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDpressObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDcontactObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.GDcontactObjects3.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext = {};
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDhomeObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDhomeObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDhomeObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDpressObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDpressObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDpressObjects3= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDcontactObjects1= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDcontactObjects2= [];
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDcontactObjects3= [];


gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScaleX() != 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2[k] = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects2);
/* Reuse gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2 */
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2[0].getWidth()));
}{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(1);
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("newwidth", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{



}


};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_width = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhomeObjectsList = [...runtimeScene.getObjects("home")];
var GDhomeObjects = Hashtable.newFrom({"home": thisGDhomeObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDpressObjectsList = [...runtimeScene.getObjects("press")];
var GDpressObjects = Hashtable.newFrom({"press": thisGDpressObjectsList});
var thisGDcontactObjectsList = [...runtimeScene.getObjects("contact")];
var GDcontactObjects = Hashtable.newFrom({"contact": thisGDcontactObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "home": GDhomeObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "press": GDpressObjects
, "contact": GDcontactObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "home": thisGDhomeObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "press": thisGDpressObjectsList
, "contact": thisGDcontactObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("website_objects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("website_objects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDhomeObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDhomeObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDhomeObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDNewPanelSpriteObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDpressObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDpressObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDpressObjects3.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDcontactObjects1.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDcontactObjects2.length = 0;
gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.GDcontactObjects3.length = 0;

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.adjust_widthContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("website_objects::hamburger_menu", gdjs.evtsExt__website_objects__hamburger_menu.hamburger_menu);
