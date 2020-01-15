import {observable,action,computed} from "mobx";

class UserStore {
    @observable private user = {
        id : 1,
        token : 1,
        name : "user 1",
    };

    @action setUserName = (newName : string) => {
        this.user.name = newName;
    };

    @computed get userInfo (){
        return {...this.user}; // clone user info so user cant alter original
    }
}
export const userStore = new UserStore();
