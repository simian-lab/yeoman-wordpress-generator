<?php
//Custom_Simian Theme Functions

add_theme_support( 'post-thumbnails' );
add_action( 'wp_enqueue_scripts','customsimian_theme_enqueue_scripts', 100 );

/**
* Register and enqueues public-facing JavaScript files.
*
* @since    1.0.0
*/
if ( ! function_exists( 'customsimian_theme_enqueue_scripts' ) ) :
  function customsimian_theme_enqueue_scripts() {
    wp_enqueue_script( 'customsimian-functions', get_stylesheet_directory_uri().'/js/functions.js',array(),'1.0.0');
    wp_enqueue_style('customsimian-style', get_stylesheet_directory_uri() . '/css/style.css',array(),'1.0.0');
  }
endif;
?>
