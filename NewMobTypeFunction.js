//2016:8/13/22:
function newMobType(entity,mobTypeID){
mobTypeID:TypeNomale{
Ex=Entity.getX(entity);
Ey=Entity.getY(entity);
Ez=Entity.getZ(entity);
Px=Player.getX();
Py=player.getY();
Pz=player.getZ();
if(Px+3>Ex&&Px-3>Ex&&Py-3||0>Ey&&Pz+3<Ez&&Pz-3<Ez){
setVelX(entity,(Px+3||Px-3<Ex));
setVelZ(entity,(Pz+3||Pz-3<Ez));
