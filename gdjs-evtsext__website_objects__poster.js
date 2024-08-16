
gdjs.evtsExt__website_objects__Poster = gdjs.evtsExt__website_objects__Poster || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__website_objects__Poster.Poster = class Poster extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.clickable = objectData.content.clickable !== undefined ? objectData.content.clickable : true;
    this._objectData.padding = objectData.content.padding !== undefined ? objectData.content.padding : Number("32") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.clickable !== newObjectData.content.clickable)
      this._objectData.clickable = newObjectData.content.clickable;
    if (oldObjectData.content.padding !== newObjectData.content.padding)
      this._objectData.padding = newObjectData.content.padding;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getclickable() {
    return this._objectData.clickable !== undefined ? this._objectData.clickable : true;
  }
  _setclickable(newValue) {
    this._objectData.clickable = newValue;
  }
  _toggleclickable() {
    this._setclickable(!this._getclickable());
  }
  _getpadding() {
    return this._objectData.padding !== undefined ? this._objectData.padding : Number("32") || 0;
  }
  _setpadding(newValue) {
    this._objectData.padding = newValue;
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext = {};
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDtext_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDtext_9595contentObjects2= [];


gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Image_content"), gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1[k] = gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1[i]._getclickable() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1[k] = gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_click = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDImage_9595contentObjectsList = [...runtimeScene.getObjects("Image_content")];
var GDImage_9595contentObjects = Hashtable.newFrom({"Image_content": thisGDImage_9595contentObjectsList});
var thisGDtext_9595contentObjectsList = [...runtimeScene.getObjects("text_content")];
var GDtext_9595contentObjects = Hashtable.newFrom({"text_content": thisGDtext_9595contentObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Image_content": GDImage_9595contentObjects
, "text_content": GDtext_9595contentObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Image_content": thisGDImage_9595contentObjectsList
, "text_content": thisGDtext_9595contentObjectsList
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

gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDImage_9595contentObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDtext_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.GDtext_9595contentObjects2.length = 0;

gdjs.evtsExt__website_objects__Poster.Poster.prototype.poster_clickContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext = {};
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDImage_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDImage_9595contentObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDtext_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDtext_9595contentObjects2= [];


gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects1[i]._setclickable(true);
}
}}

}


};

gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_click = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDImage_9595contentObjectsList = [...runtimeScene.getObjects("Image_content")];
var GDImage_9595contentObjects = Hashtable.newFrom({"Image_content": thisGDImage_9595contentObjectsList});
var thisGDtext_9595contentObjectsList = [...runtimeScene.getObjects("text_content")];
var GDtext_9595contentObjects = Hashtable.newFrom({"text_content": thisGDtext_9595contentObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Image_content": GDImage_9595contentObjects
, "text_content": GDtext_9595contentObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Image_content": thisGDImage_9595contentObjectsList
, "text_content": thisGDtext_9595contentObjectsList
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

gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDImage_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDImage_9595contentObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDtext_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.GDtext_9595contentObjects2.length = 0;

gdjs.evtsExt__website_objects__Poster.Poster.prototype.enable_clickContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext = {};
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDImage_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDImage_9595contentObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDtext_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDtext_9595contentObjects2= [];


gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects1[i]._setclickable(false);
}
}}

}


};

gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_click = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDImage_9595contentObjectsList = [...runtimeScene.getObjects("Image_content")];
var GDImage_9595contentObjects = Hashtable.newFrom({"Image_content": thisGDImage_9595contentObjectsList});
var thisGDtext_9595contentObjectsList = [...runtimeScene.getObjects("text_content")];
var GDtext_9595contentObjects = Hashtable.newFrom({"text_content": thisGDtext_9595contentObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Image_content": GDImage_9595contentObjects
, "text_content": GDtext_9595contentObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Image_content": thisGDImage_9595contentObjectsList
, "text_content": thisGDtext_9595contentObjectsList
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

gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDImage_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDImage_9595contentObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDtext_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.GDtext_9595contentObjects2.length = 0;

gdjs.evtsExt__website_objects__Poster.Poster.prototype.disable_clickContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDImage_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDImage_9595contentObjects2= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDtext_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDtext_9595contentObjects2= [];


gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDImage_9595contentObjectsList = [...runtimeScene.getObjects("Image_content")];
var GDImage_9595contentObjects = Hashtable.newFrom({"Image_content": thisGDImage_9595contentObjectsList});
var thisGDtext_9595contentObjectsList = [...runtimeScene.getObjects("text_content")];
var GDtext_9595contentObjects = Hashtable.newFrom({"text_content": thisGDtext_9595contentObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Image_content": GDImage_9595contentObjects
, "text_content": GDtext_9595contentObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Image_content": thisGDImage_9595contentObjectsList
, "text_content": thisGDtext_9595contentObjectsList
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

gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDImage_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDImage_9595contentObjects2.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDtext_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.GDtext_9595contentObjects2.length = 0;

gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext = {};
gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.GDImage_9595contentObjects1= [];
gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.GDtext_9595contentObjects1= [];


gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


};

gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDImage_9595contentObjectsList = [...runtimeScene.getObjects("Image_content")];
var GDImage_9595contentObjects = Hashtable.newFrom({"Image_content": thisGDImage_9595contentObjectsList});
var thisGDtext_9595contentObjectsList = [...runtimeScene.getObjects("text_content")];
var GDtext_9595contentObjects = Hashtable.newFrom({"text_content": thisGDtext_9595contentObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Image_content": GDImage_9595contentObjects
, "text_content": GDtext_9595contentObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Image_content": thisGDImage_9595contentObjectsList
, "text_content": thisGDtext_9595contentObjectsList
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

gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.GDImage_9595contentObjects1.length = 0;
gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.GDtext_9595contentObjects1.length = 0;

gdjs.evtsExt__website_objects__Poster.Poster.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}

gdjs.evtsExt__website_objects__Poster.Poster.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("website_objects::Poster", gdjs.evtsExt__website_objects__Poster.Poster);
