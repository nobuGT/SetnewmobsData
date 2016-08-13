//2016:8/13/22:10
function SetNewmob(name,mobID,RenderType,Skin,HitPoint){
name=Level.spawnMob(x,y+1,z,mobID,"mob/Skin");
Entity.setRenderType(name,RenderType);
Entity.setHealth(name,HitPoint);
Entity.setNameTag(name,"name");
}
