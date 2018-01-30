import keyMirror from "keymirror";


//Creating action constant using keymirror lib. where key is mirrror as value example: LOAD_DATA: 'LOAD_DATA'
export const AppConstant = {
  ActionTypes: keyMirror({
   LOAD_DATA: null,
   GET_ALL_COMMENTS: null,
   SHOW_BUTTON: null
  })
};