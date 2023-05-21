const imagePath = "./png/asset.png";

var vm = new Vue({
  el: "#app",
  data: {
    gather: true,
    state: "Press the cards to start a game",
    symbols: [
      { label: "spades", image: "./png/green.png", symbol: "" },
      { label: "hearts", image: "./png/orange.png", symbol: "" },
      { label: "diamonds", image: "./png/red.png", symbol: "" },
      { label: "777", image: "./png/full_red.png", symbol: "" },
    ],
    cards: [
      {
        id: 1,
        label: "spades",
        open: true,
      },
      {
        id: 2,
        label: "hearts",
        open: false,
      },
      {
        id: 3,
        label: "777",
        open: false,
      },
      {
        id: 4,
        label: "diamonds",
        open: false,
      },
    ],
    question: null,
    mode: "",
    count: 0,
    pickOutState: false,
    showPopupModal: false,
    popupType: "",
    popupMessage: "",
  },
  methods: {
    getSymbolImage(label) {
      const symbol = this.symbols.find((s) => s.label === label);
      return symbol ? symbol.image : "";
    },
    shuffle() {
      let newOrder;
      newOrder = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
      // console.log("ordinea noua e:", newOrder);
      this.cards.forEach((card, cid) => (card.id = newOrder[cid]));
    },
    turnAll(state) {
      this.cards.forEach((card) => (card.open = state));
    },
    startGame() {
      this.mode = "";
      this.question = this.symbols.find((symbol) => symbol.label === "777");
      // this.question = this.symbols[parseInt(Math.random()*4)]
      this.turnAll(false);
      this.gather = true;
      this.state = "lets play...";
      setTimeout(() => {
        this.gather = false;
        this.state = `Your mission is to follow the <img src="${imagePath}" alt="777"> card!`;
        // console.log(imagePath, "img");
        // this.state = "lets play...";
      }, 1000);
      setTimeout(() => {
        this.turnAll(true);
        // console.log(imagePath, "img");
        this.state = `Your mission is to follow the <img src="${imagePath}" alt="777"> card!`;
      }, 2000);
      setTimeout(() => {
        this.turnAll(false);
        this.state = "Get ready... ";
      }, 4000);
      this.count = 0;
      setTimeout(() => {
        this.pickOutState = false;
        let startShuffle = () => {
          this.shuffle();
          if (this.count++ < 6) {
            setTimeout(startShuffle, 300);
          } else {
            console.log(imagePath, "img");
            this.state = `Please pick out <img src="${imagePath}" alt="777"> card!`;
            this.mode = "Answer";
            this.pickOutState = true;
          }
        };
        startShuffle();
      }, 6000);
    },
    openCard(card) {
      this.pickOutState = false;
      if (this.mode == "Answer") {
        card.open = !card.open;
        if (card.label == this.question.label) {
          setTimeout(() => {
            this.showPopupModal = true;
            this.popupType = "continue";
            this.showPopup(
              `<div class="c_popText"><div>congrats!!</div><div>you found the winning card!</div><img src="${imagePath}" alt="777"> <div>claim your prize</div></div>`
            );
          }, 1200);
          //  this.state =``
        } else {
          setTimeout(() => {
            let card = this.getCard(this.question.label);
            card.open = true;
          }, 700);
          setTimeout(() => {
            this.showPopupModal = true;
            this.popupType = "start";
            // this.state = "You lose !!!";
            this.showPopup(
              `<div class="c_popText"><div>Sorry, you lose!!</div> <div>you didn't find the winning card </div> <img src="${imagePath}" alt="777"><div> please Try again.</div></div>`
            );
          }, 2000);
        }
        // setTimeout(() => {
        //   this.startGame();
        // }, 3000);
      } else {
        // this.startGame();
      }
    },

    showPopup(message) {
      this.popupMessage = message;
    },
    closePopupModalAndStartGame() {
      this.showPopupModal = false;
      this.startGame();
    },
    closePopupModalAndShowPrize() {
      this.showPopupModal = false;
      this.startGame();
      // this.showPrize();
    },
    getSymbol(label) {
      let result = this.symbols.find((s) => s.label == label);
      return result ? result.symbol : label;
    },
    getCard(label) {
      return this.cards.find((card) => card.label == label);
    },
  },

  mounted() {
    this.startGame();
  },
});
