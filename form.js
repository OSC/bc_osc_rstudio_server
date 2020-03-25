'use strict'

/**
 * Fix num cores, allowing blanks to remain
 */
function fix_num_cores() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  let node_type = node_type_input.val();
  let num_cores_input = $('#num_cores');

  if(num_cores_input.val() === '') {
    return;
  }

  if(node_type === 'hugemem') {
    set_ppn_owens_hugemem(num_cores_input);
  } else {
    set_ppn_owens_regular(num_cores_input);
  }
}

/**
 * Sets the PPN limits available for Owens hugemem nodes.
 *
 * hugemem reservations are always assigned the full node
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_owens_hugemem(num_cores_input) {
  const NUM_CORES = 48;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', NUM_CORES);
  num_cores_input.val(NUM_CORES);
}

/**
 * Sets the PPN limits available for non hugemem Owens nodes.
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_owens_regular(num_cores_input) {
  const NUM_CORES = 28;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', 0);
  num_cores_input.val(Math.min(NUM_CORES, num_cores_input.val()));
}


/**
 * Change the maximum number of cores selected.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change(node_type_input, fix_num_cores);
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
  const show = !! event.target.value.match(/R\/3\.6\.1/);
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
  }else {
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
  let parent = form_element;

  while (
    (! parent[0].classList.contains('form-group')) &&
    (! parent.is('html')) // ensure that we don't loop infinitely
  ) {
    parent = parent.parent();
  }

  // If parent is HTML then something has gone wrong and visibility should not be changed
  if ( parent.is('html') ) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    parent.hide();
  }
}

// Main

// Set the max value to be what was set in the last session
fix_num_cores();
toggle_tutorial_control_visibility(
  // Fake the event
  { target: document.querySelector('#batch_connect_session_context_version') }
);
set_node_type_change_handler();
set_version_change_hander();