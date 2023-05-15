//==============================================================================
//------------------------------------------------------------------------------
//The Word Search Game Widget
//------------------------------------------------------------------------------
//
//  ------
//  Usage:
//  ------
//      $(document).ready( function () {
//      let words = "earth,mars,mercury,neptune,pluto,saturn,jupiter,one,two,
//              three,four,five,six,seven,eight,mozart,bach,meyer,rose,mahler";
//      $("#theGrid").wordsearchwidget({"wordlist" : words,"gridsize" : 12});
//  });
//
//  -------
//  Inputs:
//  -------
//  gridsize - Size of grid to generate (this will be a square)
//  wordlist - Comma separated list of words to place on the grid
//
//  -------------
//  What it does:
//  -------------
//  Creates a grid of letters with words from the wordlist
//  These words are randomly placed in the following directions
//  1. Horizontal
//  2. Vertical
//  3. Left-Diagonal
//  4. Right-Diagonal
//  In addition, the letters are placed in forward or reverse order, randomly
//  Provision is made to overlap words
//
//  The User is expected to click on a letter and drag to the last letter of the
//  word. If the selected letters form a word that is in the word list the UI
//  will indicate that by crossing it out from the wordlist
//
//  If the user cannot find a word, she has to click on that word in the
//  wordlist and the UI will hightlight the word in the grid and cross it out
//
//  ------------------
//  Technical Details:
//  ------------------
//
//      Contains 3 areas:
//          a) main game grid (#rf-searchgamecontainer)
//          b) list of words to be found (#rf-wordcontainer)
//          c) list of words that have been found (#rf-foundwordcontainer)
//
//      Data Structures used:
//      ---------------------
//          Objects related to the Data Model
//          0) Model
//              a) Grid
//                  1) Cell
//                  2) HorizontalPopulator
//                  3) VerticalPopulator
//                  4) LeftDiagonalPopulator
//                  5) RightDiagonalPopulator
//
//              b) WordList
//                  1) Word
//
//          Objects related to View
//          1) Root
//          2) Hotzone
//          3) Arms
//          4) Visualizer
//
//          Objects related to the controller
//          1) GameWidgetHelper
//
//
//==============================================================================
$("#modal-win").hide();
(function ($, undefined) {
  $.widget("ryanf.wordsearchwidget", $.ui.mouse, {
    options: {
      wordlist: null,
      gridsize: 12,
    },
    _mapEventToCell: function (event) {
      let currentColumn = Math.ceil(
        (event.pageX - this._cellX) / this._cellWidth
      );
      let currentRow = Math.ceil(
        (event.pageY - this._cellY) / this._cellHeight
      );
      let el = $(
        "#rf-tablegrid tr:nth-child(" +
          currentRow +
          ") td:nth-child(" +
          currentColumn +
          ")"
      );
      return el;
    },

    _create: function () {
      //member letiables
      this.model = GameWidgetHelper.prepGrid(
        this.options.gridsize,
        this.options.wordlist
      );
      this.startedAt = new Root();
      this.hotzone = new Hotzone();
      this.arms = new Arms();

      GameWidgetHelper.renderGame(this.element[0], this.model);

      this.options.distance = 0; // set mouse option property
      this._mouseInit();

      let cell = $("#rf-tablegrid tr:first td:first");
      this._cellWidth = cell.outerWidth();
      this._cellHeight = cell.outerHeight();
      this._cellX = cell.offset().left;
      this._cellY = cell.offset().top;
    }, //_create

    destroy: function () {
      this.hotzone.clean();
      this.arms.clean();
      this.startedAt.clean();

      this._mouseDestroy();
      return this;
    },

    //mouse callbacks
    _mouseStart: function (event) {
      let panel = $(event.target).parents("div").attr("id");
      if (panel == "rf-searchgamecontainer") {
        this.startedAt.setRoot(event.target);
        this.hotzone.createZone(event.target);
      } else if (panel == "rf-wordcontainer") {
        //User has requested help. Identify the word on the grid
        //We have a reference to the td in the cells that make up this word
        let idx = $(event.target).parent().children().index(event.target);

        let selectedWord = this.model.wordList.get(idx);
        // console.log(idx, "idx");
        console.log(selectedWord.cellsUsed, "selectedWord idx");
        $(selectedWord.cellsUsed).each(function () {
          Visualizer.highlight($(this.td));
        });
      }
    },

    _mouseDrag: function (event) {
      event.target = this._mapEventToCell(event);
      //if this.root - clear out everything and return to orignal clicked state
      if (this.startedAt.isSameCell(event.target)) {
        this.arms.returnToNormal();
        this.hotzone.setChosen(-1);
        return;
      }

      //if event is on an armed cell
      if (
        $(event.target).hasClass("rf-armed") ||
        $(event.target).hasClass("rf-glowing")
      ) {
        //CHANGE!

        //if in hotzone
        let chosenOne = this.hotzone.index(event.target);
        if (chosenOne != -1) {
          //set target to glowing; set rest of hotzone to armed
          this.hotzone.setChosen(chosenOne);

          //calculate arms and set to armed
          this.arms.deduceArm(this.startedAt.root, chosenOne);
        } else {
          //in arms
          //set glowing from target to root
          this.arms.glowTo(event.target);
        }
      }
    },

    _mouseStop: function (event) {
      console.log(_csvwords,"afsa");
      //get word
      let selectedword = "";
    
      $(".rf-glowing, .rf-highlight", this.element[0]).each(function () {
        let u = $.data(this, "cell");
        selectedword += u.value;
      });

      let wordIndex = this.model.wordList.isWordPresent(selectedword);
      console.log(wordIndex,"wordIndex");
      if (wordIndex !== -1) {
        // let selectedWordObj = this.model.wordList.words[wordIndex];
        let removedWord = _csvwords.splice(selectedword, 1);
        let remainingCount = _csvwords.length;
        
        console.log("removedWord:", removedWord);
        console.log("remainingCount:", remainingCount);

        $("#remaining-count").text(`Remaining words: ${remainingCount} for the max prize. Can you see it?`);
        $(".rf-glowing, .rf-highlight", this.element[0]).each(function () {
          Visualizer.select(this);
          $.data(this, "selected", "true");
          // GameWidgetHelper.signalWordFound(this); // Pass the DOM element instead of wordIndex
        });
        GameWidgetHelper.signalWordFound(wordIndex);
        if (remainingCount === 0) {
          setTimeout(() => {
            $("#modal-win").show();
          },700)
         
        }
      } else {
        console.log("nada");
      }

      this.hotzone.returnToNormal();
      this.startedAt.returnToNormal();
      this.arms.returnToNormal();

      // return isWordPresent;
    },
  }); //widget

  $.extend($.ryanf.wordsearchwidget, {
    version: "0.0.1",
  });

  //------------------------------------------------------------------------------
  // VIEW OBJECTS
  //------------------------------------------------------------------------------
  /*
   * The Arms represent the cells that are selectable once the hotzone has been
   * exited/passed
   */
  function Arms() {
    this.arms = null;

    //deduces the arm based on the cell from which it exited the hotzone.
    this.deduceArm = function (root, idx) {
      this.returnToNormal(); //clear old arm
      let ix = $(root).parent().children().index(root);

      //create the new nominees
      this.arms = new Array();

      //create surrounding nominees
      switch (idx) {
        case 0: //horizontal left
          this.arms = $(root).prevAll();
          break;

        case 1: //horizontal right
          this.arms = $(root).nextAll();
          break;

        case 2: //vertical top
          let $n = this.arms;
          $(root)
            .parent()
            .prevAll()
            .each(function () {
              $n.push($(this).children().get(ix));
            });

          break;

        case 3: //vertical bottom
          let $o = this.arms;
          $(root)
            .parent()
            .nextAll()
            .each(function () {
              $o.push($(this).children().get(ix));
            });
          break;

        case 4: //right diagonal up
          let $p = this.arms;

          //for all prevAll rows
          let currix = ix;
          $(root)
            .parent()
            .prevAll()
            .each(function () {
              $p.push($(this).children().get(++currix));
            });
          break;

        case 5: //left diagonal up
          let $q = this.arms;

          //for all prevAll rows
          let currixq = ix;
          $(root)
            .parent()
            .prevAll()
            .each(function () {
              $q.push($(this).children().get(--currixq));
            });
          break;

        case 6: //left diagonal down
          let $r = this.arms;
          //for all nextAll rows
          let currixr = ix;
          $(root)
            .parent()
            .nextAll()
            .each(function () {
              $r.push($(this).children().get(++currixr));
            });
          break;

        case 7: //right diagonal down
          let $s = this.arms;
          //for all nextAll rows
          let currixs = ix;
          $(root)
            .parent()
            .nextAll()
            .each(function () {
              $s.push($(this).children().get(--currixs));
            });
          break;
      }
      for (let x = 1; x < this.arms.length; x++) {
        Visualizer.arm(this.arms[x]);
      }
    };

    //lights up the cells that from the root cell tothe current one
    this.glowTo = function (upto) {
      let to = $(this.arms).index(upto);

      for (let x = 1; x < this.arms.length; x++) {
        if (x <= to) {
          Visualizer.glow(this.arms[x]);
        } else {
          Visualizer.arm(this.arms[x]);
        }
      }
    };

    //clear out the arms
    this.returnToNormal = function () {
      if (!this.arms) return;

      for (let t = 1; t < this.arms.length; t++) {
        //don't clear the hotzone
        Visualizer.restore(this.arms[t]);
      }
    };

    this.clean = function () {
      $(this.arms).each(function () {
        Visualizer.clean(this);
      });
    };
  }

  /*
   * Object that represents the cells that are selectable around the root cell
   */
  function Hotzone() {
    this.elems = null;

    //define the hotzone
    //select all neighboring cells as nominees
    this.createZone = function (root) {
      this.elems = new Array();

      let $tgt = $(root);
      let ix = $tgt.parent().children().index($tgt);

      let above = $tgt.parent().prev().children().get(ix); // above
      let below = $tgt.parent().next().children().get(ix); // below

      //nominatedCells.push(event.target); // self
      this.elems.push($tgt.prev()[0], $tgt.next()[0]); //horizontal
      this.elems.push(
        above,
        below,
        $(above).next()[0],
        $(above).prev()[0], //diagonal
        $(below).next()[0],
        $(below).prev()[0] //diagonal
      );

      $(this.elems).each(function () {
        if ($(this) != null) {
          Visualizer.arm(this);
        }
      });
    };
    //give the hotzone some intelligence
    this.index = function (elm) {
      return $(this.elems).index(elm);
    };

    this.setChosen = function (chosenOne) {
      for (let x = 0; x < this.elems.length; x++) {
        Visualizer.arm(this.elems[x]);
      }
      if (chosenOne != -1) {
        Visualizer.glow(this.elems[chosenOne]);
      }
    };

    this.returnToNormal = function () {
      for (let t = 0; t < this.elems.length; t++) {
        Visualizer.restore(this.elems[t]);
      }
    };

    this.clean = function () {
      $(this.elems).each(function () {
        Visualizer.clean(this);
      });
    };
    console.log(this);
  }

  /*
   * Object that represents the first cell clicked
   */
  function Root() {
    this.root = null;

    this.setRoot = function (root) {
      this.root = root;
      Visualizer.glow(this.root);
    };

    this.returnToNormal = function () {
      Visualizer.restore(this.root);
    };

    this.isSameCell = function (t) {
      return $(this.root).is($(t));
    };

    this.clean = function () {
      Visualizer.clean(this.root);
    };
  }

  /*
   * A utility object that manipulates the cell display based on the methods called.
   */
  let Visualizer = {
    glow: function (c) {
      $(c)
        .removeClass("rf-armed")
        .removeClass("rf-selected")
        .addClass("rf-glowing");
    },

    arm: function (c) {
      $(c) //.removeClass("rf-selected")
        .removeClass("rf-glowing")
        .addClass("rf-armed");
    },

    restore: function (c) {
      $(c).removeClass("rf-armed").removeClass("rf-glowing");

      if (c != null && $.data(c, "selected") == "true") {
        $(c).addClass("rf-selected");
      }
    },

    select: function (c) {
      $(c)
        .removeClass("rf-armed")
        .removeClass("rf-glowing")
        .animate(
          {
            opacity: "20",
          },
          500,
          "linear",
          function () {
            $(c).removeClass("rf-highlight").addClass("rf-selected").animate(
              {
                opacity: "show",
              },
              500,
              "linear"
            );
          }
        );
    },

    highlight: function (c) {
      $(c)
        .removeClass("rf-armed")
        .removeClass("rf-selected")
        .addClass("rf-highlight");
    },

    signalWordFound: function (w) {
      $(w)
        .css("background", "orange")
        .animate(
          {
            opacity: "hide",
          },
          1000,
          "linear",
          function () {
            $(w).css("background", "orange");
            $(w).addClass("rf-foundword").animate(
              {
                opacity: "show",
              },
              1000,
              "linear"
            );
          }
        );
      // if($(".rf-ptrue").find("rf-foundword")){
      //     console.log("test")
      //     alert("test")
      //    }
    },

    clean: function (c) {
      $(c)
        .removeClass("rf-armed")
        .removeClass("rf-glowing")
        .removeClass("rf-selected");
      $.removeData($(c), "selected");
    },
  };
  console.log(Visualizer, "style");
  //--------------------------------------------------------
  // OBJECTS RELATED TO THE MODEL
  //------------------------------------------------------------------------------

  /*
   * Represents the individual cell on the grid
   */
  function Cell() {
    this.DEFAULT = "-";
    this.isHighlighted = false;
    this.value = this.DEFAULT;
    this.parentGrid = null;
    this.isUnwritten = function () {
      return this.value == this.DEFAULT;
    };
    this.isSelected = false;
    this.isSelecting = true;
    this.td = null; // reference to UI component
  } //Cell

  /*
   * Represents the Grid
   */
  function Grid() {
    this.cells = null;

    this.directions = [
      "LeftDiagonal",
      "Horizontal",
      "RightDiagonal",
      "Vertical",
    ];

    this.initializeGrid = function (size) {
      this.cells = new Array(size);
      for (let i = 0; i < size; i++) {
        this.cells[i] = new Array(size);
        for (let j = 0; j < size; j++) {
          let c = new Cell();
          c.parentgrid = this;
          this.cells[i][j] = c;
        }
      }
    };

    this.getCell = function (row, col) {
      return this.cells[row][col];
    };

    this.createHotZone = function (uic) {
      let $tgt = uic;

      let hzCells = new Array();
      let ix = $tgt.parent().children().index($tgt);
    };

    this.size = function () {
      return this.cells.length;
    };

    //place word on grid at suggested location
    this.put = function (row, col, word) {
      //Pick the right Strategy to place the word on the grid
      let populator = eval(
        "new " +
          eval("this.directions[" + Math.floor(Math.random() * 4) + "]") +
          "Populator(row,col,word, this)"
      );
      let isPlaced = populator.populate();

      //Didn't get placed.. brute force-fit (if possible)
      if (!isPlaced) {
        for (let x = 0; x < this.directions.length; x++) {
          let populator2 = eval(
            "new " +
              eval("this.directions[" + x + "]") +
              "Populator(row,col,word, this)"
          );
          let isPlaced2 = populator2.populate();
          if (isPlaced2) break;
        }
      }
    };

    this.fillGrid = function () {
      for (let i = 0; i < this.size(); i++) {
        for (let j = 0; j < this.size(); j++) {
          if (this.cells[i][j].isUnwritten()) {
            this.cells[i][j].value = String.fromCharCode(
              Math.floor(65 + Math.random() * 26)
            );
          }
        }
      }
    };
    console.log(this);
  } //Grid

  /*
   * Set of strategies to populate the grid.
   */
  //Create a Horizontal Populator Strategy
  function HorizontalPopulator(row, col, word, grid) {
    this.grid = grid;
    this.row = row;
    this.col = col;
    this.word = word;
    this.size = this.grid.size();
    this.cells = this.grid.cells;

    //populate the word
    this.populate = function () {
      // try and place word in this row

      // check if this row has a contigous block free
      // 1. starting at col (honour the input)
      if (this.willWordFit()) {
        this.writeWord();
      } else {
        // for every row - try to fit this
        for (let i = 0; i < this.size; i++) {
          let xRow = (this.row + i) % this.size; // loop through all rows starting at current;

          // 2. try starting anywhere on line
          let startingPoint = this.findContigousSpace(xRow, word);

          if (startingPoint == -1) {
            // if not, then try to see if we can overlap this word only any existing alphabets
            let overlapPoint = this.isWordOverlapPossible(xRow, word);
            if (overlapPoint == -1) {
              // if not, then try another row and repeat process,
              continue;
            } else {
              this.row = xRow;
              this.col = overlapPoint;
              this.writeWord();
              break;
            }
          } else {
            this.row = xRow;
            this.col = startingPoint;
            this.writeWord();
            break;
          }
        } //for each row
      }
      // if still not, then return false (i.e. not placed. we need to try another direction
      return word.isPlaced;
    }; //populate

    //write word on grid at given location
    //also remember which cells were used for displaying the word
    this.writeWord = function () {
      let chars = word.chars;
      for (let i = 0; i < word.size; i++) {
        let c = new Cell();
        c.value = chars[i];
        this.cells[this.row][this.col + i] = c;
        word.containedIn(c);
        word.isPlaced = true;
      }
    };

    //try even harder, check if this word can be placed by overlapping cells with same content
    this.isWordOverlapPossible = function (row, word) {
      return -1;
    };

    //check if word will fit at the chosen location
    this.willWordFit = function () {
      let isFree = false;
      let freeCounter = 0;
      let chars = this.word.chars;
      for (let i = col; i < this.size; i++) {
        if (
          this.cells[row][i].isUnwritten() ||
          this.cells[row][i] == chars[i]
        ) {
          freeCounter++;
          if (freeCounter == word.size) {
            isFree = true;
            break;
          }
        } else {
          break;
        }
      }
      return isFree;
    };

    //try harder, check if there is contigous space anywhere on this line.
    this.findContigousSpace = function (row, word) {
      let freeLocation = -1;
      let freeCounter = 0;
      let chars = word.chars;
      for (let i = 0; i < this.size; i++) {
        if (
          this.cells[row][i].isUnwritten() ||
          this.cells[row][i] == chars[i]
        ) {
          freeCounter++;
          if (freeCounter == word.size) {
            freeLocation = i - (word.size - 1);
            break;
          }
        } else {
          freeCounter = 0;
        }
      }
      return freeLocation;
    };
  } //HorizontalPopulator

  //Create a Vertical Populator Strategy
  function VerticalPopulator(row, col, word, grid) {
    this.grid = grid;
    this.row = row;
    this.col = col;
    this.word = word;
    this.size = this.grid.size();
    this.cells = this.grid.cells;

    //populate the word
    this.populate = function () {
      // try and place word in this row

      // check if this row has a contigous block free
      // 1. starting at col (honour the input)
      if (this.willWordFit()) {
        this.writeWord();
      } else {
        // for every row - try to fit this
        for (let i = 0; i < this.size; i++) {
          let xCol = (this.col + i) % this.size; // loop through all rows starting at current;

          // 2. try starting anywhere on line
          let startingPoint = this.findContigousSpace(xCol, word);

          if (startingPoint == -1) {
            // if not, then try to see if we can overlap this word only any existing alphabets
            let overlapPoint = this.isWordOverlapPossible(xCol, word);
            if (overlapPoint == -1) {
              // if not, then try another row and repeat process,
              continue;
            } else {
              this.row = overlapPoint;
              this.col = xCol;
              this.writeWord();
              break;
            }
          } else {
            this.row = startingPoint;
            this.col = xCol;
            this.writeWord();
            break;
          }
        } //for each row
      }
      // if still not, then return false (i.e. not placed. we need to try another direction
      return word.isPlaced;
    }; //populate

    //write word on grid at given location
    this.writeWord = function () {
      let chars = word.chars;
      for (let i = 0; i < word.size; i++) {
        let c = new Cell();
        c.value = chars[i];
        this.cells[this.row + i][this.col] = c; //CHANGED
        word.containedIn(c);
        word.isPlaced = true;
      }
    };

    //try even harder, check if this word can be placed by overlapping cells with same content
    this.isWordOverlapPossible = function (col, word) {
      return -1;
    };

    //check if word will fit at the chosen location
    this.willWordFit = function () {
      let isFree = false;
      let freeCounter = 0;
      let chars = this.word.chars;
      for (let i = row; i < this.size; i++) {
        // CHANGED
        if (
          this.cells[i][col].isUnwritten() ||
          chars[i] == this.cells[i][col].value
        ) {
          //CHANGED
          freeCounter++;
          if (freeCounter == word.size) {
            isFree = true;
            break;
          }
        } else {
          break;
        }
      }
      return isFree;
    };

    //try harder, check if there is contigous space anywhere on this line.
    this.findContigousSpace = function (col, word) {
      let freeLocation = -1;
      let freeCounter = 0;
      let chars = word.chars;
      for (let i = 0; i < this.size; i++) {
        if (
          this.cells[i][col].isUnwritten() ||
          chars[i] == this.cells[i][col].value
        ) {
          //CHANGED
          freeCounter++;
          if (freeCounter == word.size) {
            freeLocation = i - (word.size - 1);
            break;
          }
        } else {
          freeCounter = 0;
        }
      }
      return freeLocation;
    };
  } //VerticalPopulator

  //Create a LeftDiagonal Populator Strategy
  function LeftDiagonalPopulator(row, col, word, grid) {
    this.grid = grid;
    this.row = row;
    this.col = col;
    this.word = word;
    this.size = this.grid.size();
    this.cells = this.grid.cells;

    //populate the word
    this.populate = function () {
      // try and place word in this row

      // check if this row has a contigous block free
      // 1. starting at col (honour the input)
      if (this.willWordFit()) {
        this.writeWord();
      } else {
        let output = this.findContigousSpace(this.row, this.col, word);

        if (output[0] != true) {
          // for every row - try to fit this
          OUTER: for (
            let col = 0, row = this.size - word.size;
            row >= 0;
            row--
          ) {
            for (let j = 0; j < 2; j++) {
              let op = this.findContigousSpace(
                j == 0 ? row : col,
                j == 0 ? col : row,
                word
              );

              if (op[0] == true) {
                this.row = op[1];
                this.col = op[2];
                this.writeWord();
                break OUTER;
              }
            }
          }
        } else {
          this.row = output[1];
          this.col = output[2];
          this.writeWord();
        }
      }
      // if still not, then return false (i.e. not placed. we need to try another direction
      return word.isPlaced;
    }; //populate

    //write word on grid at given location
    //also remember which cells were used for displaying the word
    this.writeWord = function () {
      let chars = word.chars;
      let lrow = this.row;
      let lcol = this.col;
      for (let i = 0; i < word.size; i++) {
        let c = new Cell();
        c.value = chars[i];
        this.cells[lrow++][lcol++] = c;
        word.containedIn(c);
        word.isPlaced = true;
      }
    };

    //try even harder, check if this word can be placed by overlapping cells with same content
    this.isWordOverlapPossible = function (row, word) {
      return -1;
    };

    //check if word will fit at the chosen location
    this.willWordFit = function () {
      let isFree = false;
      let freeCounter = 0;
      let chars = this.word.chars;
      let lrow = this.row;
      let lcol = this.col;
      let i = 0;
      while (lcol < this.grid.size() && lrow < this.grid.size()) {
        if (
          this.cells[lrow][lcol].isUnwritten() ||
          this.cells[lrow][lcol] == chars[i++]
        ) {
          freeCounter++;
          if (freeCounter == word.size) {
            isFree = true;
            break;
          }
        } else {
          break;
        }
        lrow++;
        lcol++;
      }
      return isFree;
    };

    //try harder, check if there is contigous space anywhere on this line.
    this.findContigousSpace = function (xrow, xcol, word) {
      let freeLocation = false;
      let freeCounter = 0;
      let chars = word.chars;
      let lrow = xrow;
      let lcol = xcol;

      while (lrow > 0 && lcol > 0) {
        lrow--;
        lcol--;
      }
      let i = 0;
      while (true) {
        if (
          this.cells[lrow][lcol].isUnwritten() ||
          this.cells[lrow][lcol] == chars[i++]
        ) {
          freeCounter++;
          if (freeCounter == word.size) {
            freeLocation = true;
            break;
          }
        } else {
          freeCounter = 0;
        }
        lcol++;
        lrow++;

        if (lcol >= this.size || lrow >= this.size) {
          break;
        }
      }
      if (freeLocation) {
        lrow = lrow - word.size + 1;
        lcol = lcol - word.size + 1;
      }
      return [freeLocation, lrow, lcol];
    };
  } //LeftDiagonalPopulator

  //Create a RightDiagonal Populator Strategy
  function RightDiagonalPopulator(row, col, word, grid) {
    this.grid = grid;
    this.row = row;
    this.col = col;
    this.word = word;
    this.size = this.grid.size();
    this.cells = this.grid.cells;

    //populate the word
    this.populate = function () {
      // try and place word in this row

      // check if this row has a contigous block free
      // 1. starting at col (honour the input)
      let rr = 0;
      if (this.willWordFit()) {
        this.writeWord();
      } else {
        let output = this.findContigousSpace(this.row, this.col, word);

        if (output[0] != true) {
          // for every row - try to fit this
          OUTER: for (
            let col = this.size - 1, row = this.size - word.size;
            row >= 0;
            row--
          ) {
            for (let j = 0; j < 2; j++) {
              let op = this.findContigousSpace(
                j == 0 ? row : this.size - 1 - col,
                j == 0 ? col : this.size - 1 - row,
                word
              );

              if (op[0] == true) {
                this.row = op[1];
                this.col = op[2];
                this.writeWord();
                break OUTER;
              }
            }
          }
        } else {
          this.row = output[1];
          this.col = output[2];
          this.writeWord();
        }
      }
      // if still not, then return false (i.e. not placed. we need to try another direction
      return word.isPlaced;
    }; //populate

    //write word on grid at given location
    //also remember which cells were used for displaying the word
    this.writeWord = function () {
      let chars = word.chars;
      let lrow = this.row;
      let lcol = this.col;
      for (let i = 0; i < word.size; i++) {
        let c = new Cell();
        c.value = chars[i];
        this.cells[lrow++][lcol--] = c;
        word.containedIn(c);
        word.isPlaced = true;
      }
    };

    //try even harder, check if this word can be placed by overlapping cells with same content
    this.isWordOverlapPossible = function (row, word) {
      return -1;
    };

    //check if word will fit at the chosen location
    this.willWordFit = function () {
      let isFree = false;
      let freeCounter = 0;
      let chars = this.word.chars;
      let lrow = this.row;
      let lcol = this.col;
      let i = 0;
      while (lcol >= 0 && lrow < this.grid.size()) {
        if (
          this.cells[lrow][lcol].isUnwritten() ||
          this.cells[lrow][lcol] == chars[i++]
        ) {
          freeCounter++;
          if (freeCounter == word.size) {
            isFree = true;
            break;
          }
        } else {
          break;
        }
        lrow++;
        lcol--;
      }
      return isFree;
    };

    //try harder, check if there is contigous space anywhere on this line.
    this.findContigousSpace = function (xrow, xcol, word) {
      let freeLocation = false;
      let freeCounter = 0;
      let chars = word.chars;
      let lrow = xrow;
      let lcol = xcol;

      while (lrow > 0 && lcol < this.size - 1) {
        lrow--;
        lcol++;
      }
      let i = 0;
      while (lcol >= 0 && lrow < this.grid.size()) {
        if (
          this.cells[lrow][lcol].isUnwritten() ||
          this.cells[lrow][lcol] == chars[i++]
        ) {
          freeCounter++;
          if (freeCounter == word.size) {
            freeLocation = true;
            break;
          }
        } else {
          freeCounter = 0;
        }
        lrow++;
        lcol--;
        //            if (lcol <= 0 || lrow > this.size-1) {
        //                break;
        //            }
      }
      if (freeLocation) {
        lrow = lrow - word.size + 1;
        lcol = lcol + word.size - 1;
      }
      return [freeLocation, lrow, lcol];
    };
  } //RightDiagonalPopulator

  /*
   * Container for the Entire Model
   */
  function Model() {
    this.grid = null;
    this.wordList = null;

    this.init = function (grid, list) {
      this.grid = grid;
      this.wordList = list;

      for (let i = 0; i < this.wordList.size(); i++) {
        grid.put(
          Util.random(this.grid.size()),
          Util.random(this.grid.size()),
          this.wordList.get(i)
        );
      }
    };
  } //Model

  /*
   * Represents a word on the grid
   */
  function Word(val) {
    this.value = val.toUpperCase();
    this.originalValue = this.value;
    this.isFound = false;
    this.cellsUsed = new Array();

    this.isPlaced = false;
    this.row = -1;
    this.col = -1;
    this.size = -1;
    this.chars = null;

    this.init = function () {
      this.chars = this.value.split("");
      this.size = this.chars.length;
    };
    this.init();

    this.containedIn = function (cell) {
      this.cellsUsed.push(cell);
    };

    this.checkIfSimilar = function (w) {
      if (this.originalValue == w || this.value == w) {
        this.isFound = true;
        return true;
      }
      return false;
    };

    console.log(val, "string");
  }

  /*
   * Represents the list of words to display
   */
  let _csvwords;

  function WordList() {
    this.words = new Array();

    this.loadWords = function (csvwords) {
      let $n = this.words;
      
       _csvwords = csvwords;
    
      // $(csvwords.split(",")).each(function () {
      //     $n.push(new Word(this));
      // });
      $(csvwords).each(function () {
        $n.push(new Word(this));
      });
      console.log(csvwords, "csvwords");
    };

    this.add = function (word) {
      //here's where we reverse the letters randomly
      if (Math.random() * 10 > 5) {
        let s = "";
        for (let i = word.size - 1; i >= 0; i--) {
          s = s + word.value.charAt(i);
        }
        word.value = s;
        word.init();
      }
      this.words[this.words.length] = word;
    };

    this.size = function () {
      return this.words.length;
    };

    this.get = function (index) {
      return this.words[index];
    };
    // click letter x
    this.isWordPresent = function (word2check) {
      for (let x = 0; x < this.words.length; x++) {
        // console.log(x, "nada");
        if (this.words[x].checkIfSimilar(word2check)) return x;
      }
      // console.log(word2check,"notword cor");
      return -1;
    };
  }

  /*
   * Utility class
   */
  let Util = {
    random: function (max) {
      return Math.floor(Math.random() * max);
    },

    log: function (msg) {
      $("#logger").append(msg);
    },
  };

  //------------------------------------------------------------------------------
  // OBJECTS RELATED TO THE CONTROLLER
  //------------------------------------------------------------------------------
  /*
   * Main controller that interacts with the Models and View Helpers to render and
   * control the game
   */
  let GameWidgetHelper = {
    prepGrid: function (size, words) {
      let grid = new Grid();
  
      grid.initializeGrid(size);

      let wordList = new WordList();
      // console.log(wordList,"tesst")
      wordList.loadWords(words);

   

      let model = new Model();
      model.init(grid, wordList);
      grid.fillGrid();
      return model;
    },

    renderGame: function (container, model) {
      let grid = model.grid;
      let cells = grid.cells;

      let puzzleGrid =
        "<div id='rf-searchgamecontainer'><table id='rf-tablegrid' cellspacing=0 cellpadding=0 class='rf-tablestyle'>";
      for (let i = 0; i < grid.size(); i++) {
        puzzleGrid += "<tr>";
        for (let j = 0; j < grid.size(); j++) {
          puzzleGrid += "<td  class='rf-tgrid'>" + cells[i][j].value + "</td>";
        }
        puzzleGrid += "</tr>";
      }
      puzzleGrid += "</table></div>";
      $(container).append(puzzleGrid);

      let x = 0;
      let y = 0;
      $("tr", "#rf-tablegrid").each(function () {
        $("td", this).each(function (col) {
          let c = cells[x][y++];
          $.data(this, "cell", c);
          c.td = this;
        });
        y = 0;
        x++;
      });

      let words = "<div id='rf-wordcontainer'><ul>";
      $(model.wordList.words).each(function () {
        words +=
          "<li class=rf-p" + this.isPlaced + ">" + this.originalValue + "</li>";
      });
      words += "</ul></div>";
      $(container).append(words);
    },

    signalWordFound: function (idx) {
      let w = $("li").get(idx);
      console.log(w, "sfasw");
      Visualizer.signalWordFound(w);
    },
  };

})(jQuery);

(function (b) {
  b.support.touch = "ontouchend" in document;
  if (!b.support.touch) {
    return;
  }
  let c = b.ui.mouse.prototype,
    e = c._mouseInit,
    a;

  function d(g, h) {
    if (g.originalEvent.touches.length > 1) {
      return;
    }
    g.preventDefault();
    let i = g.originalEvent.changedTouches[0],
      f = document.createEvent("MouseEvents");
    f.initMouseEvent(
      h,
      true,
      true,
      window,
      1,
      i.screenX,
      i.screenY,
      i.clientX,
      i.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    g.target.dispatchEvent(f);
  }
  c._touchStart = function (g) {
    let f = this;
    if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
      return;
    }
    a = true;
    f._touchMoved = false;
    d(g, "mouseover");
    d(g, "mousemove");
    d(g, "mousedown");
  };
  c._touchMove = function (f) {
    if (!a) {
      return;
    }
    this._touchMoved = true;
    d(f, "mousemove");
  };
  c._touchEnd = function (f) {
    if (!a) {
      return;
    }
    d(f, "mouseup");
    d(f, "mouseout");
    if (!this._touchMoved) {
      d(f, "click");
    }
    a = false;
  };
  c._mouseInit = function () {
    let f = this;
    f.element
      .bind("touchstart", b.proxy(f, "_touchStart"))
      .bind("touchmove", b.proxy(f, "_touchMove"))
      .bind("touchend", b.proxy(f, "_touchEnd"));
    e.call(f);
  };
})(jQuery);
