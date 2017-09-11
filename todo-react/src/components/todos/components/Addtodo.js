import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../Actions';

class AddTodo extends Component {

	refInput(node){
		console.log(node)
		this.input = node
	}
	onSubmit(ev){
		ev.preventDefault();
		console.log('提交todo');
		console.log(this.input);


		const inputValut = this.input.value;
		if(!inputValut.trim()){
			return;
		}else{
			this.props.onAdd(inputValut);
			this.input.value = ''
		}
	}

	render(){
		return (
			<div className="add-todo">
				<form onSubmit={this.onSubmit.bind(this)}>
					<input className="new-todo" ref={this.refInput.bind(this)} />
					<button className="add-btn" type="submit">添加</button>
				</form>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {
			dispatch(addTodo(text))
		}
	}
}

export default connect(null,mapDispatchToProps)(AddTodo);