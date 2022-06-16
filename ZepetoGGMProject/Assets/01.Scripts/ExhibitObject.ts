import { ZepetoScriptableObject, ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import {Collider, Collision,GameObject} from 'UnityEngine';
import ExhibitPanel from './UI/ExhibitPanel';
import UIVO from './VO/UIVO';

export default class ExhibitObject extends ZepetoScriptBehaviour {

    @SerializeField()
    private exhibitSO: ZepetoScriptableObject<UIVO>;

    Start() {    
    }

    //OnCollisionEnter(col : Collision) {
    //    var localP: GameObject = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character.gameObject;

    //    if (col.gameObject == localP) {
    //        ExhibitPanel.Instance.SetUI(this.uiVO);
    //    }
    //}

    OnTriggerEnter(col: Collider) {
        var localP: GameObject = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character.gameObject;

        if (col.gameObject == localP) {
            ExhibitPanel.Instance.SetUI(this.exhibitSO);
        }
    }

    //OnTriggerExit(col: Collider) {
    //    var localP: GameObject = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character.gameObject;

    //    if (col.gameObject == localP) {
    //        ExhibitPanel.Instance.Close();
    //    }
    //}

}