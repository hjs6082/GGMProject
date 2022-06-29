import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Collision, GameObject, Quaternion, Transform } from 'UnityEngine';
import { Button, Image } from 'UnityEngine.UI';
import { LocalPlayer, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';

export default class NewTypescript extends ZepetoScriptBehaviour {

    @Header("Teleport UI 관련")
    @SerializeField() private tp_Panel:GameObject;
    public Floor_1_Btn:Button;
    public Floor_2_Btn:Button;
    public Floor_3_Btn:Button;
    public Floor_4_Btn:Button;
    public Floor_5_Btn:Button;

    @Header("Teleport 관련")
    public Floor_1_Trm:Transform;
    public Floor_2_Trm:Transform;
    public Floor_3_Trm:Transform;
    public Floor_4_Trm:Transform;
    public Floor_5_Trm:Transform;
    private player:LocalPlayer;

    Awake() {
        this.InitValue();
    }

    InitValue() {
        this.Floor_1_Btn.onClick.AddListener(() => this.Teleport(this.Floor_1_Trm));
        this.Floor_2_Btn.onClick.AddListener(() => this.Teleport(this.Floor_2_Trm));
        this.Floor_3_Btn.onClick.AddListener(() => this.Teleport(this.Floor_3_Trm));
        this.Floor_4_Btn.onClick.AddListener(() => this.Teleport(this.Floor_4_Trm));
        this.Floor_5_Btn.onClick.AddListener(() => this.Teleport(this.Floor_5_Trm));
    
        this.tp_Panel.SetActive(false);
    }

    OnOffTeleportPanel(bCols:bool) {
        this.tp_Panel.SetActive(bCols);
    }

    Teleport(stair:Transform) {
        this.player = ZepetoPlayers.instance.LocalPlayer;
        this.player.zepetoPlayer.character.Teleport(stair.position, Quaternion.identity);
    }

    OnTriggerEnter(cols:Collision) {
        console.log("ajkladfjkla");

        if(!this.tp_Panel.activeSelf)
        this.OnOffTeleportPanel(true);
    }

    OnTriggerExit(cols:Collision) {
        console.log("ajk");
        this.OnOffTeleportPanel(false);
    }
}