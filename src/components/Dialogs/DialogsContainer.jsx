import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addAllMessages,
  addAllPosts,
  addMessage,
  setDialogsDataUsers,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
    addAllPosts: addAllPosts,
    setDialogsDataUsers: setDialogsDataUsers,
  }),
  withAuthRedirect
)(Dialogs);

//we connect our data to store and make container component
