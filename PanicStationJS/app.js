var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 3] = "South";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
var Door = (function () {
    function Door(face, steelDoor) {
        this.face = face;
        this.isSteelDoor = steelDoor;
    }
    return Door;
})();
var Game = (function () {
    function Game() {
    }
    Game.prototype.Start = function () {
        var num = prompt("Number of Players", "2");
        for (var i = 0; i < +num; i++) {
            this.players.push(new Player("#666"), {
                units: units
            });
        }
        this.roomDeck.push(new StartingRoom());
    };
    Game.prototype.cleanUp = function () {
        this.players.forEach(function (p) {
            var actions;
            p.units.forEach(function (u) {
                actions += u.actions;
            });
            p.actions = actions;
        });
    };
    return Game;
})();
var Card = (function () {
    function Card() {
        this.width = 3;
        this.height = 6;
        this.BackImg = "";
    }
    return Card;
})();
//SearchCard start
var SearchCard = (function (_super) {
    __extends(SearchCard, _super);
    function SearchCard(permanent, tradeAble) {
        _super.call(this);
        this.isTradeAble = false;
        this.isPermaneent = false;
    }
    SearchCard.prototype.pickUp = function (player) {
    };
    SearchCard.prototype.use = function (player, target) {
        this.player = player;
        this.target = target;
    };
    return SearchCard;
})(Card);
var InfectCard = (function (_super) {
    __extends(InfectCard, _super);
    function InfectCard() {
        _super.call(this, false, false);
    }
    InfectCard.prototype.pickUp = function (player) {
        player.isHost = true;
        player.searchCards.forEach(function (card) {
            if (card instanceof BloodCard) {
                card.isTradeAble = true;
            }
        });
    };
    return InfectCard;
})(SearchCard);
var KnifeCard = (function (_super) {
    __extends(KnifeCard, _super);
    function KnifeCard() {
        _super.call(this, true, true);
    }
    return KnifeCard;
})(SearchCard);
var BloodCard = (function (_super) {
    __extends(BloodCard, _super);
    function BloodCard() {
        _super.call(this, false, false);
    }
    return BloodCard;
})(SearchCard);
var ScannerCard = (function (_super) {
    __extends(ScannerCard, _super);
    function ScannerCard() {
        _super.call(this, false, true);
    }
    return ScannerCard;
})(SearchCard);
var ScopeCard = (function (_super) {
    __extends(ScopeCard, _super);
    function ScopeCard() {
        _super.call(this, true, true);
    }
    return ScopeCard;
})(SearchCard);
var SniperCard = (function (_super) {
    __extends(SniperCard, _super);
    function SniperCard() {
        _super.call(this, true, true);
    }
    return SniperCard;
})(SearchCard);
var ParasiteCard = (function (_super) {
    __extends(ParasiteCard, _super);
    function ParasiteCard() {
        _super.call(this, false, false);
    }
    return ParasiteCard;
})(SearchCard);
var MedkitCard = (function (_super) {
    __extends(MedkitCard, _super);
    function MedkitCard() {
        _super.call(this, false, true);
    }
    return MedkitCard;
})(SearchCard);
var KeyCardCard = (function (_super) {
    __extends(KeyCardCard, _super);
    function KeyCardCard() {
        _super.call(this, true, true);
    }
    return KeyCardCard;
})(SearchCard);
var AmmoCard = (function (_super) {
    __extends(AmmoCard, _super);
    function AmmoCard() {
        _super.call(this, true, true);
    }
    return AmmoCard;
})(SearchCard);
var GasCanCard = (function (_super) {
    __extends(GasCanCard, _super);
    function GasCanCard() {
        _super.call(this, true, true);
    }
    return GasCanCard;
})(SearchCard);
var GrenadeCard = (function (_super) {
    __extends(GrenadeCard, _super);
    function GrenadeCard() {
        _super.call(this, true, true);
    }
    return GrenadeCard;
})(SearchCard);
var PowerCard = (function (_super) {
    __extends(PowerCard, _super);
    function PowerCard() {
        _super.call(this, true, true);
    }
    PowerCard.prototype.use = function (player, target) {
        this.player = player;
        this.target = target;
        player.actions += 2;
    };
    return PowerCard;
})(SearchCard);
///SearchCard End
///Rooms Start
var RoomCard = (function (_super) {
    __extends(RoomCard, _super);
    function RoomCard() {
        _super.apply(this, arguments);
        this.isTradeAllowed = true;
    }
    return RoomCard;
})(Card);
var Hive = (function (_super) {
    __extends(Hive, _super);
    function Hive() {
        _super.call(this);
    }
    return Hive;
})(RoomCard);
var ComputerRoom = (function (_super) {
    __extends(ComputerRoom, _super);
    function ComputerRoom() {
        _super.call(this);
    }
    return ComputerRoom;
})(RoomCard);
var InvestigateRoom = (function (_super) {
    __extends(InvestigateRoom, _super);
    function InvestigateRoom() {
        _super.call(this);
    }
    return InvestigateRoom;
})(RoomCard);
var MedicRoom = (function (_super) {
    __extends(MedicRoom, _super);
    function MedicRoom() {
        _super.call(this);
    }
    return MedicRoom;
})(RoomCard);
var ParasiteRoom = (function (_super) {
    __extends(ParasiteRoom, _super);
    function ParasiteRoom() {
        _super.call(this);
    }
    return ParasiteRoom;
})(RoomCard);
var ThreeCardRoom = (function (_super) {
    __extends(ThreeCardRoom, _super);
    function ThreeCardRoom() {
        _super.call(this);
    }
    return ThreeCardRoom;
})(RoomCard);
var EmptyRoom = (function (_super) {
    __extends(EmptyRoom, _super);
    function EmptyRoom() {
        _super.call(this);
    }
    return EmptyRoom;
})(RoomCard);
var StartingRoom = (function (_super) {
    __extends(StartingRoom, _super);
    function StartingRoom() {
        _super.call(this);
        this.doors.push(new Door(Direction.North, false));
        this.doors.push(new Door(Direction.East, false));
        this.doors.push(new Door(Direction.South, false));
        this.doors.push(new Door(Direction.West, false));
        this.isTradeAllowed = false;
    }
    return StartingRoom;
})(RoomCard);
//Rooms End
//Player Start
var Player = (function () {
    function Player(color) {
        this.isHost = false;
        this.isInfected = false;
        this.color = color;
    }
    Player.prototype.trade = function (targetPlayer) {
    };
    Player.prototype.recieveCard = function (card) {
        if (card instanceof BloodCard) {
            this.isInfected = true;
        }
        this.searchCards.push(card);
    };
    return Player;
})();
var Unit = (function () {
    function Unit() {
        this.life = 4;
        this.actions = this.life / 2;
    }
    return Unit;
})();
var Human = (function (_super) {
    __extends(Human, _super);
    function Human() {
        _super.apply(this, arguments);
    }
    Human.prototype.Action = function (player, target) {
    };
    return Human;
})(Unit);
var Android = (function (_super) {
    __extends(Android, _super);
    function Android() {
        _super.apply(this, arguments);
    }
    Android.prototype.Action = function (player, target) {
    };
    return Android;
})(Unit);
var Parasite = (function (_super) {
    __extends(Parasite, _super);
    function Parasite() {
        _super.apply(this, arguments);
    }
    return Parasite;
})(Unit);
window.onload = function () {
};
//# sourceMappingURL=app.js.map