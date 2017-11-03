let constants = {
    'ENTER_BUTTON_NUM': 13,
    'LEFT_BUTTON_NUM': 37,
    'UP_BUTTON_NUM': 38,
    'RIGHT_BUTTON_NUM': 39,
    'DOWN_BUTTON_NUM': 40,
    'COMMA_BUTTON_NUM': 188,
    'DATE_FORMAT': 'dddd, MMMM Do YYYY, h:mm:ss a',
    'ANIMATED_REFRESH_ICON': "<span class='glyphicon glyphicon-refresh glyphicon-refresh-animate'></span>",
    'IGNORE_ERRORS_TOKEN_STR': '1',
    'DISASSEMBLY_FOR_MISSING_FILE_STR': '2',

    'source_code_states': {
        ASSM_AND_SOURCE_CACHED: 'ASSM_AND_SOURCE_CACHED',
        SOURCE_CACHED: 'SOURCE_CACHED',
        FETCHING_SOURCE: 'FETCHING_SOURCE',
        ASSM_CACHED: 'ASSM_CACHED',
        FETCHING_ASSM: 'FETCHING_ASSM',
        ASSM_UNAVAILABLE: 'ASSM_UNAVAILABLE',
        FILE_MISSING: 'FILE_MISSING',
        NONE_AVAILABLE: 'NONE_AVAILABLE',
    },

    'inferior_states': {
        'unknown': 'unknown',
        'running': 'running',
        'paused': 'paused',
        'exited': 'exited',
    },

    'tree_component_id': 'tree'
}
constants['IGNORE_ERRORS_TOKEN_INT'] = parseInt(constants.IGNORE_ERRORS_TOKEN_STR)
constants['DISASSEMBLY_FOR_MISSING_FILE_INT'] = parseInt(constants.DISASSEMBLY_FOR_MISSING_FILE_STR)

export default Object.freeze(constants)
