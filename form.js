'use strict'

/**
 * Clamp between two numbers
 *
 * @param      {number}  min     The minimum
 * @param      {number}  max     The maximum
 * @param      {number}  val     The value to clamp
 */
function clamp(min, max, val) {
  let value = Math.min(max, Math.max(min, val));
  return value;
}

/**
 * Fix num cores, allowing blanks to remain
 */
function fix_num_cores() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  let num_cores_input = $('#batch_connect_session_context_num_cores');

  if(num_cores_input.val() === '') {
    return;
  }

  set_ppn_by_node_type(node_type_input, num_cores_input);
}

function set_ppn_by_node_type(node_type_input, num_cores_input){
  let data = node_type_input.find(':selected').data();

  num_cores_input.attr('max', data.maxPpn);
  num_cores_input.attr('min', data.minPpn);

  // Clamp value between min and max
  num_cores_input.val(
    clamp(data.minPpn, data.maxPpn, num_cores_input.val())
  );
}

/**
 * Change the maximum number of cores selected.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change(fix_num_cores);
}

/**
 * Add a change listener to the version select
 */
function set_version_change_hander() {
  let version_select = $("#batch_connect_session_context_version");
  version_select.change(function(event){
    toggle_tutorial_control_visibility(event);
    toggle_gpu_nodes(event);
  });
}

/**
 * Toggle the visibility of the tutorial for specific versions of R
 * @param  {Object} event The change event
 */
function toggle_tutorial_control_visibility(event) {
  const selector = '#batch_connect_session_context_include_tutorials';
  const show = /3\.6\.[13]/.test(event.target.value);
  toggle_visibilty_of_form_group( selector, show );

  // Ensure unchecked if control is hidden
  if ( ! show ) {
    $(selector).prop('checked', false);
  }
}

/**
 * Given a change event from choosing a different verion of R, toggle 
 * the ability to choose GPUs depending on the version.
 * 
 * @param  {Object} event The change event
 */
function toggle_gpu_nodes(event){
  const show = /3\.6\.3/.test(event.target.value); // test seems more readable than = !! match
  const gpu = $("#batch_connect_session_context_node_type option[value='gpu']");

  if(show) {
    gpu.show();
  } else {
    gpu.hide();
    gpu.prop('selected', false);
  }
}

/**
 * Toggle the visibilty of a form group
 *
 * @param      {string}    form_id  The form identifier
 * @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibilty_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

function set_cluster_change_handler(){
  let cluster_input = $('#batch_connect_session_context_cluster');
  cluster_input.change(toggle_node_type);
}

function toggle_node_type(){
  let all_options = $("#batch_connect_session_context_node_type option");
  all_options.hide();
  let cluster = $('#batch_connect_session_context_cluster').val();
  let cluster_options = $("#batch_connect_session_context_node_type option[data-cluster=" + cluster + "]");
  cluster_options.show();
}

// Main

// Set the max value to be what was set in the last session
fix_num_cores();
toggle_tutorial_control_visibility(
  // Fake the event
  { target: document.querySelector('#batch_connect_session_context_version') }
);
toggle_node_type();


set_cluster_change_handler();
set_version_change_hander();
set_node_type_change_handler();
