import {homeScreenService} from './services';
import {HOME_LISTING} from './constant';
import {cloneDeep} from 'lodash';

/**
 * Home screen API
 */
export const homeScreenAPI = () => {
  return (dispatch, getState) => {
    return homeScreenService()
      .then(response => {
        return dispatch({
          type: HOME_LISTING,
          payload: [
            ...response.json.data,
            ...response.json.data,
            ...response.json.data,
          ],
        });
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
};

export const loadMoreData = () => {
  return (dispatch, getState) => {
    const initRedux = cloneDeep(getState().account.homeList);
    return homeScreenService()
      .then(response => {
        return dispatch({
          type: HOME_LISTING,
          payload: [...initRedux, ...response.json.data, ...response.json.data],
        });
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
};
