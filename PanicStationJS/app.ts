enum Direction {
    North = 1,
    East,
    South,
    West
}
class Door {
    face: Direction;
    isSteelDoor: boolean;

    constructor(face: Direction, steelDoor: boolean) {
        this.face = face;
        this.isSteelDoor = steelDoor;
    }
}
class Game {
    searchDeck: Array<SearchCard>;
    roomDeck: Array<RoomCard>;
    players: Array<Player>;
    parasites: Array<Unit>;
    Start() {
        var num = prompt("Number of Players", "2");
        for (var i = 0; i < +num; i++) {
            this.players.push(new Player("#666"){
                units =
            });
        }
        this.roomDeck.push(new StartingRoom());

    }
    cleanUp() {
        this.players.forEach(function (p) {
            var actions;
                p.units.forEach(function (u) {
                    actions += u.actions;
            });
                p.actions = actions;
             
        });

    }
}
class Card {
    width: number = 3;
    height: number = 6;
    BackImg: string = "";
}
//SearchCard start
class SearchCard extends Card {
    isPermaneent: boolean;
    isTradeAble: boolean;
    player: Player;
    target: Unit;
    constructor(permanent: boolean, tradeAble: boolean) {
        super();
        this.isTradeAble = false;
        this.isPermaneent = false;
    }
    pickUp(player: Player) {
        
    }
    use(player, target) {
        this.player = player;
        this.target = target;
    }
}
class InfectCard extends SearchCard {
    
    constructor() {
        super(false,false);

    }
    pickUp(player: Player) {
        player.isHost = true;
        player.searchCards.forEach(function (card) {
            if (card instanceof BloodCard) {
                card.isTradeAble = true;
            }
        });
    }
}
class KnifeCard extends SearchCard {
    constructor() {
        super(true, true);
    }
}
class BloodCard extends SearchCard {
    constructor() {
        super(false, false);
    }
}
class ScannerCard extends SearchCard {
    constructor() {
        super(false, true);
    }
}
class ScopeCard extends SearchCard {
    constructor() {
        super(true, true);
    }
}
class SniperCard extends SearchCard {
    constructor() {
        super(true, true);
    }
}
class ParasiteCard extends SearchCard {
    constructor() {
        super(false, false);

    }
    
}
class MedkitCard extends SearchCard {
    constructor() {
        super(false, true);

    }
}
class KeyCardCard extends SearchCard {
    constructor() {
        super(true, true);

    }
}
class AmmoCard extends SearchCard {
    constructor() {
        super(true, true);

    }
}
class GasCanCard extends SearchCard {
    constructor() {
        super(true, true);

    }
}
class GrenadeCard extends SearchCard {
    constructor() {
        super(true, true);

    }
}
class PowerCard extends SearchCard {
    constructor() {
        super(true, true);
        
    }
    use(player, target) {
        this.player = player;
        this.target = target;
        player.actions += 2;
    }

}

///SearchCard End
///Rooms Start
class RoomCard extends Card{ 
    roomNumber: number;
    x: number;
    y: number;
    doors:Array<Door>;
    isSearched:boolean;
    isTradeAllowed: boolean =true;
}
class Hive extends RoomCard {
    constructor() {
        super();
    }
}
class ComputerRoom extends RoomCard {
    constructor() {
        super();
    }
}
class InvestigateRoom extends RoomCard {
    constructor() {
        super();
    }
}
class MedicRoom extends RoomCard {
    constructor() {
        super();
    }
}
class ParasiteRoom extends RoomCard {
    constructor() {
        super();
    }
}
class ThreeCardRoom extends RoomCard {
    constructor() {
        super();
    }
}
class EmptyRoom extends RoomCard {
    constructor() {
        super();
    }
}
class StartingRoom extends RoomCard {
    constructor() {
        super();
        this.doors.push(new Door(Direction.North, false));
        this.doors.push(new Door(Direction.East, false));
        this.doors.push(new Door(Direction.South, false));
        this.doors.push(new Door(Direction.West, false));
        this.isTradeAllowed = false;
    }
}
//Rooms End
//Player Start
class Player {
    units: Unit[];
    actions: number;
    color: string;
    isHost: boolean = false;
    isInfected: boolean = false;
    searchCards: Array<SearchCard>;
    constructor(color) {
        this.color = color;
    }
    trade(targetPlayer) {
        
    }
    recieveCard(card: SearchCard) {
        if (card instanceof BloodCard) {
            this.isInfected = true;
        }
        this.searchCards.push(card);
    }
}
class Unit {
    image: string;
    life: number = 4;
    actions: number = this.life / 2;
    room: number;
}
class Human extends Unit {
    Action(player: Player, target: Unit) {
        
    }
}
class Android extends Unit {
    Action(player: Player, target: Unit) {

    }
}
class Parasite extends Unit {
    
}
window.onload = () => {
  
};
