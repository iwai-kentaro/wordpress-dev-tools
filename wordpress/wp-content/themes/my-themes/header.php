<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/css/style.css'); ?>">
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/script.js" defer></script>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header id="site-header" role="banner">
        <div class="site-branding">
            <?php if (has_custom_logo()) : ?>
                <div class="site-logo"><?php the_custom_logo(); ?></div>
            <?php endif; ?>

            <h1 class="site-title">
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                    <?php bloginfo('name'); ?>
                </a>
            </h1>

            <p class="site-description"><?php bloginfo('description'); ?></p>
        </div>

        <nav id="site-navigation" role="navigation">
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                )
            );
            ?>
        </nav>
    </header>