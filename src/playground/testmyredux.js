import {configurestore} from '../Redux/store/configureStore'
import {onExpand,onCollapse} from '../Redux/actions/navaction'

const store = configurestore()

store.dispatch(onExpand)

console.log(store.getState());
