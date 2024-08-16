gdjs.load_32screenCode = {};
gdjs.load_32screenCode.localVariables = [];
gdjs.load_32screenCode.GDBlueButtonWithShadowObjects1= [];
gdjs.load_32screenCode.GDBlueButtonWithShadowObjects2= [];
gdjs.load_32screenCode.GDBlueButtonWithShadowObjects3= [];
gdjs.load_32screenCode.GDloadscreenObjects1= [];
gdjs.load_32screenCode.GDloadscreenObjects2= [];
gdjs.load_32screenCode.GDloadscreenObjects3= [];
gdjs.load_32screenCode.GDthrobberObjects1= [];
gdjs.load_32screenCode.GDthrobberObjects2= [];
gdjs.load_32screenCode.GDthrobberObjects3= [];


gdjs.load_32screenCode.asyncCallback13955156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.load_32screenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("throbber"), gdjs.load_32screenCode.GDthrobberObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("throbber angle").setNumber((( gdjs.load_32screenCode.GDthrobberObjects2.length === 0 ) ? 0 :gdjs.load_32screenCode.GDthrobberObjects2[0].getAngle()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "website", false);
}gdjs.load_32screenCode.localVariables.length = 0;
}
gdjs.load_32screenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.load_32screenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.load_32screenCode.asyncCallback13955156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.load_32screenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getWindowInnerWidth() <= gdjs.evtTools.window.getWindowInnerHeight() / 1920 * 928);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 928, 1920);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getWindowInnerWidth() > gdjs.evtTools.window.getWindowInnerHeight() / 1920 * 928);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptWidth");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1920);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.load_32screenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("throbber"), gdjs.load_32screenCode.GDthrobberObjects1);
{for(var i = 0, len = gdjs.load_32screenCode.GDthrobberObjects1.length ;i < len;++i) {
    gdjs.load_32screenCode.GDthrobberObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "website");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("throbber"), gdjs.load_32screenCode.GDthrobberObjects1);
{for(var i = 0, len = gdjs.load_32screenCode.GDthrobberObjects1.length ;i < len;++i) {
    gdjs.load_32screenCode.GDthrobberObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.load_32screenCode.GDthrobberObjects1.length ;i < len;++i) {
    gdjs.load_32screenCode.GDthrobberObjects1[i].rotate(90, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "website");
if (isConditionTrue_0) {

{ //Subevents
gdjs.load_32screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.load_32screenCode.eventsList1(runtimeScene);
}


};

gdjs.load_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.load_32screenCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.load_32screenCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.load_32screenCode.GDBlueButtonWithShadowObjects3.length = 0;
gdjs.load_32screenCode.GDloadscreenObjects1.length = 0;
gdjs.load_32screenCode.GDloadscreenObjects2.length = 0;
gdjs.load_32screenCode.GDloadscreenObjects3.length = 0;
gdjs.load_32screenCode.GDthrobberObjects1.length = 0;
gdjs.load_32screenCode.GDthrobberObjects2.length = 0;
gdjs.load_32screenCode.GDthrobberObjects3.length = 0;

gdjs.load_32screenCode.eventsList2(runtimeScene);

return;

}

gdjs['load_32screenCode'] = gdjs.load_32screenCode;
