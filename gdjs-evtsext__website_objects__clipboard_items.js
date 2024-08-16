
gdjs.evtsExt__website_objects__clipboard_items = gdjs.evtsExt__website_objects__clipboard_items || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items = class clipboard_items extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.clipboard_content = objectData.content.clipboard_content !== undefined ? objectData.content.clipboard_content : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.clipboard_content !== newObjectData.content.clipboard_content)
      this._objectData.clipboard_content = newObjectData.content.clipboard_content;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getclipboard_content() {
    return this._objectData.clipboard_content !== undefined ? this._objectData.clipboard_content : "";
  }
  _setclipboard_content(newValue) {
    this._objectData.clipboard_content = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext = {};
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects2= [];


gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595clipboard_9595items_9546clipboard_9595items_9546prototype_9546onCreatedContext_9546GDNewPanelSpriteObjects1Objects = Hashtable.newFrom({"NewPanelSprite": gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1});
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595clipboard_9595items_9546clipboard_9595items_9546prototype_9546onCreatedContext_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1});
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595clipboard_9595items_9546clipboard_9595items_9546prototype_9546onCreatedContext_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1});
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595clipboard_9595items_9546clipboard_9595items_9546prototype_9546onCreatedContext_9546GDNewPanelSpriteObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1[i].setZOrder(-(1));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1.length = 0;

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595clipboard_9595items_9546clipboard_9595items_9546prototype_9546onCreatedContext_9546GDNewSpriteObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595website_9595objects_9595_9595clipboard_9595items_9546clipboard_9595items_9546prototype_9546onCreatedContext_9546GDNewTextObjects1Objects, 0, 0, "");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("NewSprite"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("NewText"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1[i].setCenterYInScene((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1[i].setCenterYInScene((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects1[0].getCenterYInScene()));
}
}}

}


};

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewTextObjectsList = [...runtimeScene.getObjects("NewText")];
var GDNewTextObjects = Hashtable.newFrom({"NewText": thisGDNewTextObjectsList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewText": GDNewTextObjects
, "NewSprite": GDNewSpriteObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewText": thisGDNewTextObjectsList
, "NewSprite": thisGDNewSpriteObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
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

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewTextObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length = 0;

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext = {};
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewTextObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewTextObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewSpriteObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewPanelSpriteObjects2= [];


gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects1[i]._setclipboard_content(eventsFunctionContext.getArgument("new_string"));
}
}}

}


};

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboard = function(new_string, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewTextObjectsList = [...runtimeScene.getObjects("NewText")];
var GDNewTextObjects = Hashtable.newFrom({"NewText": thisGDNewTextObjectsList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewText": GDNewTextObjects
, "NewSprite": GDNewSpriteObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewText": thisGDNewTextObjectsList
, "NewSprite": thisGDNewSpriteObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
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
if (argName === "new_string") return new_string;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewTextObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.GDNewPanelSpriteObjects2.length = 0;

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.reconf_clipboardContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final = [];

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final = [];

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects2= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2= [];


gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("NewSprite"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1[k] = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1);
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, (( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1[0]._getclipboard_content()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length = 0;

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1.length = 0;

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


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
isConditionTrue_0 = false;
{gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("NewText"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2[0].getWidth()) != Math.max((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2[0].getAABBRight()), (( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[0].getAABBRight())) - (( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[0].getAABBLeft()));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final.indexOf(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[j]) === -1 )
            gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final.push(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final.indexOf(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2[j]) === -1 )
            gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final.push(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewPanelSprite"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("NewText"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2[0].getHeight()) != Math.max((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2[0].getAABBBottom()), (( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[0].getAABBBottom())) - (( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[0].getAABBTop()));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final.indexOf(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[j]) === -1 )
            gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final.push(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final.indexOf(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2[j]) === -1 )
            gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final.push(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1_1final, gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1);
gdjs.copyArray(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1_1final, gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1);
gdjs.copyArray(gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("NewSprite"), gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1);
/* Reuse gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1 */
/* Reuse gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()));
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()));
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(1);
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1[i].setCenterYInScene((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1[i].setWrappingWidth((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1[0].getWidth()) - (( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1[i].setCenterYInScene((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1[i].setX((( gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1[0].getAABBRight()));
}
}}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewTextObjectsList = [...runtimeScene.getObjects("NewText")];
var GDNewTextObjects = Hashtable.newFrom({"NewText": thisGDNewTextObjectsList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewText": GDNewTextObjects
, "NewSprite": GDNewSpriteObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewText": thisGDNewTextObjectsList
, "NewSprite": thisGDNewSpriteObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
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

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewTextObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewSpriteObjects2.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects2.length = 0;

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__website_objects__clipboard_items.clipboard_items.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("website_objects::clipboard_items", gdjs.evtsExt__website_objects__clipboard_items.clipboard_items);
