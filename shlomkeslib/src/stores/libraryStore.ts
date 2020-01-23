import {observable, action, computed, runInAction} from "mobx";

enum states{
    pending = "pending",
    done = "done",
    error = "error"
}

class LibraryStore {
    URL = "/DB.json";

    constructor() {
        this.loadData();
        this.setState(states.pending);
    }

    @observable
    private Books =[];
    @observable state = states.pending; // "pending" / "done" / "error"


    @action private setBooksData = (Books : any) => {
        this.Books = Books;
    };
    @action public getBooksData = () => {
        return this.Books;
    };
    @action private setState = (newState : states) => {
        this.state = newState;
    };

    @action
    public loadData (){
        fetch(this.URL)
            .then(data => data.json())
            .then(data => {
                this.setBooksData(data.Books);
                this.setState(states.done);
            }).catch(() => { this.setState(states.error)});

    }

}
export const libraryStore = new LibraryStore()
