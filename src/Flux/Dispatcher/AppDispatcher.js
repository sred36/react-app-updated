import { Dispatcher } from 'flux';


//Create Dispatcher class from Flux Dispatcher 
class DispatcherClass extends Dispatcher {
    handleViewAction(action) {
        //Dispatching action creater to store via dispatch events with payload object, source is the propertiy for checking is it server actions or //view action

        //action is coming from Action creator function 
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action,
        });
    }

    handleServerAction(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action,
        });
    }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;