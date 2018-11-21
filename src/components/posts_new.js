import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return(
      <div className="form-group has-danger">
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

onSubmit(values){
  console.log(values);
}


  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
          />

        <Field
          label="Post Content"
          name="Content"
          component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  //console.log(values) -> { title:'asdf', categories: 'asf', content:'asdf'}
  const errors = {};

  // Validate the inputs from 'values'


  if(!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // if errors is empty, the form is ok, submit
  //if the errors has any properties, redux form assumes form is bad
  return errors;

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
