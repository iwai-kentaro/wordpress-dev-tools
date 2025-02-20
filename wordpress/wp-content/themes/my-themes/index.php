<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage My_Theme
 * @since My Theme 1.0
 */

get_header();
?>

<main id="site-content" role="main">

    <?php
    if (have_posts()) {

        while (have_posts()) {
            the_post();

            get_template_part('template-parts/content', get_post_type());
        }
    } else {
        get_template_part('template-parts/content', 'none');
    }
    ?>
    <h1>テスト環境構築</h1>
    <h1>テスト環境構築</h1>
    <h1>テスト環境構築</h1>
    <h1>テスト環境構築</h1>
    <h1>テスト環境構築</h1>

</main>

<?php
get_footer();
