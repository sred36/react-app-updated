import AppDispatcher from "../Dispatcher/AppDispatcher";
import { AppConstant } from "../Constants/AppConstant";


//Action Creator
class AppActionCls {

    //Action Function dispatching actions ===> object of actionType & data
    getData() {
        AppDispatcher.handleViewAction({
            actionType: AppConstant.ActionTypes.LOAD_DATA,
            data: null
        });
    }

    getAllComments() {
        AppDispatcher.handleViewAction({
            actionType: AppConstant.ActionTypes.GET_ALL_COMMENTS,
            data: null
        });
    }

    showButton(isShow) {
        AppDispatcher.handleViewAction({
            actionType: AppConstant.ActionTypes.SHOW_BUTTON,
            data: {show: isShow}
        });
    }
}

//instance of AppActionCls is AppAction
const AppAction = new AppActionCls();

export default AppAction;
