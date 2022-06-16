import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Collision, GameObject, Quaternion, Transform } from 'UnityEngine';
import { Button, Image } from 'UnityEngine.UI';
import { LocalPlayer, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';

export default class NewTypescript extends ZepetoScriptBehaviour {

    @Header("Teleport UI 관련")
    @SerializeField() private tp_Panel:GameObject;
    @SerializeField() private tp_Btn_Parent:Transform;
    public tp_Btns:Button[];

    @Header("Teleport 관련")
    @SerializeField() private tp_Trm_Parent:Transform;
    private tp_Trms:Transform[];
    private player:LocalPlayer;
    private index:int;

    Awake() {
        this.InitValue();
    }

    InitValue() {
        this.tp_Btns = new Button[this.tp_Btn_Parent.childCount];
        this.tp_Trms = new Transform[this.tp_Trm_Parent.childCount];

        for(var i = 0; i < this.tp_Btns.length; i++)
        {
            this.index = i;
            this.tp_Btns[i] = this.tp_Btn_Parent.GetChild(i).GetComponent<Button>();
            this.tp_Btns[i].onClick.AddListener(() => this.Teleport(this.index))
        }

        for(var i = 0; i < this.tp_Trms.length; i++)
        {
            this.tp_Trms[i] = this.tp_Trm_Parent.GetChild(i);
        }

        
    }

    OnOffTeleportPanel(bCols:bool) {
        this.tp_Panel.SetActive(bCols);
    }

    Teleport(idx:int) {
        this.player.zepetoPlayer.character.Teleport(this.tp_Trms[idx].position, Quaternion.identity);
    }

    OnTriggerEnter(cols:Collision) {
        console.log("ajkladfjkla");
        this.player = ZepetoPlayers.instance.LocalPlayer;
        this.OnOffTeleportPanel(true);
    }

    OnTriggerExit(cols:Collision) {
        console.log("ajk");
        this.OnOffTeleportPanel(false);
    }
}