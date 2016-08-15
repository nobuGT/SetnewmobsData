//2016:8/13/22:
function newMobType(entity,mobTypeID){
mobTypeID:TypeNomale{
Ex=Entity.getX(entity);
Ey=Entity.getY(entity);
Ez=Entity.getZ(entity);
Px=Player.getX();
Py=player.getY();
Pz=player.getZ();
if(Px+25>Ex&&Px-25>Ex&&Py-25||0>Ey&&Pz+25<Ez&&Pz-25<Ez){
setVelX(entity,(Px+3||Px-3<Ex)*3/20);
setVelZ(entity,(Pz+3||Pz-3<Ez));
if(
