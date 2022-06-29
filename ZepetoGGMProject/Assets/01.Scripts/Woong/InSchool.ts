import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Collision, GameObject, Quaternion, Transform } from 'UnityEngine';
import { Button, Image } from 'UnityEngine.UI';
import { LocalPlayer, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';

export default class InSchool extends ZepetoScriptBehaviour {
    @Header("Teleport 관련")
    public Floor_1_Trm:Transform;
    private player:LocalPlayer;

    Teleport(stair:Transform) {
        this.player = ZepetoPlayers.instance.LocalPlayer;

        this.player.zepetoPlayer.character.Teleport(stair.position, Quaternion.identity);
    }

    OnTriggerEnter(cols:Collision) {
        console.log("ajkladfjkla");


        this.Teleport(this.Floor_1_Trm);
    }
}