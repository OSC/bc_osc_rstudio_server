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

$(document).ready(function() {
  // Set the max value to be what was set in the last session
  fix_num_cores();
  set_node_type_change_handler();
});