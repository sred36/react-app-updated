import AppDispatcher from "../Dispatcher/AppDispatcher";
import {AppConstant} from "../Constants/AppConstant";
import { EventEmitter } from "events"; //NodeJs eventEmitter for connencting store => View

const CHANGE_EVENT = "change";

class AppStoreCls extends EventEmitter {
    constructor() {
        super();
        //Binding store callback of Dispatcher ---- Dispatcher => callback => store operation
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this));
        //Storing action type in currentAction
        this.currentAction = null;
          //Store Object
        this.storeState = {
            showButton: false
        };
    }


    //Listener on Change of emit calling callback view function
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }


    //Fetching data from server and storing in store object and emiting this changes so view can listen
    getData(actionType) {
        this.currentAction = actionType;
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then((response) => {
            this.storeState.photoAlbumData = response;
            this.emit(CHANGE_EVENT);
        })
    }

    getAllComments(actionType) {
        this.currentAction = actionType;
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then((response) => {
            this.storeState.allComments = response;
            this.emit(CHANGE_EVENT);
        })
    }


    //getting store object
    getStoreState() {
        return this.storeState;
    }

    getButtonValues() {
        return this.storeState.showButton;
    }

    setShowButton(actionType, isShow) {
        this.currentAction = actionType;
        this.storeState.showButton = isShow;
        this.emit(CHANGE_EVENT);
    }


    //Dispatcher callback function 
    dispatcherCallback(payload) {

        //Action object => {actionTypes: ..., data: ....}
        const action = payload.action;
        //const data = action.data;

        //checking which action is came and do some operation base on action
        switch (action.actionType) {
            case AppConstant.ActionTypes.LOAD_DATA:
                this.getData(AppConstant.ActionTypes.LOAD_DATA);
                break;
            case AppConstant.ActionTypes.GET_ALL_COMMENTS:
            this.getAllComments(AppConstant.ActionTypes.GET_ALL_COMMENTS);
            break;

            case AppConstant.ActionTypes.SHOW_BUTTON:
            this.setShowButton(AppConstant.ActionTypes.SHOW_BUTTON, action.data.show);
            break;

            default:
                return true;
        }
        return true;
    }

}

const AppStore = new AppStoreCls();
export default AppStore;
