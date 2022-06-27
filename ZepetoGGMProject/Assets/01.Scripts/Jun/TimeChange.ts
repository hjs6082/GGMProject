import { Collider, Debug, GameObject } from 'UnityEngine'
import { Local } from 'UnityEngine.SocialPlatforms';
import { ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TimeChange extends ZepetoScriptBehaviour {

    //@SerializeField() private timeChangeObj: GameObject;

    @SerializeField() private timeChangePanel: GameObject;
    Start() {

    }

    OnTriggerEnter(coll: Collider) {
        var localP: GameObject = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character.gameObject;

        if (coll.gameObject == localP) {
            this.timeChangePanel.SetActive(true);
        }
    }

}