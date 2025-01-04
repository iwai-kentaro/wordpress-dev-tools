<footer id="site-footer" role="contentinfo">
    <div class="site-info">
        <a href="<?php echo esc_url(__('https://wordpress.org/', 'textdomain')); ?>">
            <?php printf(__('Proudly powered by %s', 'textdomain'), 'WordPress'); ?>
        </a>
        <span class="sep"> | </span>
        <?php printf(__('Theme: %1$s by %2$s.', 'textdomain'), 'My Theme', '<a href="https://example.com">Your Name</a>'); ?>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>