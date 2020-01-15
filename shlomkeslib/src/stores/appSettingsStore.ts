import {observable,action,computed} from "mobx";

class AppSettingsStore {
    @observable private darkMode = false;

    @action tuggoleDarkMode =() => {
        this.darkMode = !this.darkMode;
    };

    @computed public get isDarkMode(){
        return this.darkMode;
    }
}
export const appSettingsStore = new AppSettingsStore()
