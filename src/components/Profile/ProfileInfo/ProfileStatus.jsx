import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
    // status: "random status",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
    console.log("componentDidUpdate");
  }
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status); //making request on server , with thunk
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div> //onDoubleClick we change span on input
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange} //набирая статус мы меняем локальный стейт, глобальный пока остается
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              //по клику мимо инпута мы апдейтим статус путем запроса put на сервер и меняем глобальный стейт и в спане меняется статус
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
