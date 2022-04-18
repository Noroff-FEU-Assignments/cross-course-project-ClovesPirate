<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'square-eyes' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8888' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5[,Z=%nv%Q[GKj:iU,XUwJY}kJyWlC$,G Ji^ o(F9a`40gUN,RJcJB(ZonAMy>e' );
define( 'SECURE_AUTH_KEY',  'iia<E7$tnng7-;ke.=A~HdNHG).LIav2L}{@)MuSfKvpa5)#&&JRX-u]QkA]Ijll' );
define( 'LOGGED_IN_KEY',    'mR[2=h]<q!j%);ghOub484aeE8iugzks4p)oRxFa6eBtE3XSY52y0Vs5: acVM,v' );
define( 'NONCE_KEY',        '#!g%}K?7%]@?>8h]xs](t)%d$Mill@R 4d%0>,k[emisid||9k+=C}PJ#Lvim6S;' );
define( 'AUTH_SALT',        'c/`;DrZ/%D:,?]3N7%|VMm<,FuuH>Nd*_}D21b=XN%X^)vj+Kf;l3<hN.q``]a^^' );
define( 'SECURE_AUTH_SALT', '^*vmi@4<z$x9AhK_bs457zu;0Uek }d:>1|]TLi4{,KweC_R4Pkxv556[5N,wZ$2' );
define( 'LOGGED_IN_SALT',   '5<LNxZ`;MM:~:YL&zXM S@:9=;DNav`$cz!CLmH8wqZbRR,9I-a2ACEb. pmj=yd' );
define( 'NONCE_SALT',       'xATXpMZ1,,zm#v$[bZnC/x^[h^?[DeXm&i+MIHWi);$~-?iHQx LR_@~(8Z7L>Va' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'HEADLESS_MODE_CLIENT_URL', 'http://www.example.com' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
