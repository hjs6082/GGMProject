import { Transform } from 'UnityEngine';
import { SpawnInfo, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WorldService } from 'ZEPETO.World';

export default class GameManager extends ZepetoScriptBehaviour {

    private static instance: GameManager = null;
    public static GetInstance(): GameManager {
        return this.instance;
    }

    @SerializeField()
    private spawnPosition: Transform

    Awake() {
        GameManager.instance = this;
    }

    Start() {

        var spawn: SpawnInfo = new SpawnInfo();

        spawn.position = this.spawnPosition.position;
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawn, true);
        //ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => { this.PlayerCreated() });
    }

    PlayerCreated() {
        ZepetoPlayers.instance.ZepetoCamera.camera.enabled = false;
    }

    Update() {

    }

}