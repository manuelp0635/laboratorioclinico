-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2022 a las 04:27:37
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratorio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointment_list`
--

CREATE TABLE `appointment_list` (
  `id` int(30) NOT NULL,
  `code` varchar(100) NOT NULL,
  `schedule` datetime NOT NULL,
  `client_id` int(30) NOT NULL,
  `prescription_path` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `appointment_list`
--

INSERT INTO `appointment_list` (`id`, `code`, `schedule`, `client_id`, `prescription_path`, `status`, `date_created`, `date_updated`) VALUES
(1, '202201-0001', '2022-01-11 15:30:00', 2, '1_sample.pdf?v=1641884206', 6, '2022-01-11 14:06:30', '2022-01-11 16:11:57'),
(3, '202201-0002', '2022-01-11 17:00:00', 5, 'test.pdf?v=1641891660', 2, '2022-01-11 17:01:00', '2022-01-11 17:03:30'),
(4, '202201-0003', '2022-01-13 10:00:00', 2, '', 0, '2022-01-11 17:07:05', NULL),
(5, '202201-0004', '2022-01-16 16:01:00', 6, '1.pdf?v=1642186921', 0, '2022-01-14 14:02:01', '2022-01-14 14:02:01'),
(6, '202201-0005', '0000-00-00 00:00:00', 5, '2.pdf?v=1642187390', 4, '2022-01-14 14:09:50', '2022-01-14 14:11:42'),
(7, '202201-0006', '1998-10-04 13:00:00', 6, 'req_(2).txt?v=1642187867', 6, '2022-01-14 14:14:14', '2022-01-14 14:36:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointment_test_list`
--

CREATE TABLE `appointment_test_list` (
  `appointment_id` int(30) NOT NULL,
  `test_id` int(30) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `appointment_test_list`
--

INSERT INTO `appointment_test_list` (`appointment_id`, `test_id`, `date_created`) VALUES
(1, 1, '2022-01-11 14:06:30'),
(1, 3, '2022-01-11 14:06:30'),
(1, 1, '2022-01-11 14:14:13'),
(1, 3, '2022-01-11 14:14:13'),
(1, 1, '2022-01-11 14:15:45'),
(1, 3, '2022-01-11 14:15:45'),
(1, 1, '2022-01-11 14:15:57'),
(1, 3, '2022-01-11 14:15:57'),
(1, 1, '2022-01-11 14:16:34'),
(1, 3, '2022-01-11 14:16:34'),
(1, 1, '2022-01-11 14:16:39'),
(1, 3, '2022-01-11 14:16:39'),
(1, 1, '2022-01-11 14:17:44'),
(1, 3, '2022-01-11 14:17:44'),
(1, 1, '2022-01-11 14:48:09'),
(1, 3, '2022-01-11 14:48:09'),
(1, 1, '2022-01-11 14:56:46'),
(1, 3, '2022-01-11 14:56:46'),
(3, 2, '2022-01-11 17:01:00'),
(3, 5, '2022-01-11 17:01:00'),
(3, 4, '2022-01-11 17:01:00'),
(4, 3, '2022-01-11 17:07:05'),
(4, 5, '2022-01-11 17:07:05'),
(5, 5, '2022-01-14 14:02:01'),
(6, 4, '2022-01-14 14:09:50'),
(7, 1, '2022-01-14 14:14:14'),
(7, 1, '2022-01-14 14:17:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `client_list`
--

CREATE TABLE `client_list` (
  `id` int(30) NOT NULL,
  `firstname` text NOT NULL,
  `middlename` text NOT NULL,
  `lastname` text NOT NULL,
  `gender` varchar(50) NOT NULL,
  `contact` varchar(150) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `dob` date NOT NULL,
  `address` text NOT NULL,
  `avatar` text DEFAULT NULL,
  `delete_flag` tinyint(1) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `client_list`
--

INSERT INTO `client_list` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `contact`, `email`, `password`, `dob`, `address`, `avatar`, `delete_flag`, `date_created`, `date_updated`) VALUES
(2, 'Pedro', '', 'Esteves', 'Female', '09456789123', 'pesteves@cweb.com', '4b67deeb9aba04a5b54632ad19934f26', '1997-10-14', 'Sample Address only', 'uploads/client-2.png?v=1641873547', 0, '2022-01-11 11:35:33', '2022-01-14 14:07:51'),
(5, 'Valeria', '', 'Gonzalez', 'Male', '09456789123', 'vgonzalez@cweb.com', '4b67deeb9aba04a5b54632ad19934f26', '1997-07-15', 'Sample ADdress only.', 'uploads/client-5.png?v=1642187319', 0, '2022-01-11 16:56:43', '2022-01-14 14:08:39'),
(6, 'juan', '', 'usuario', 'Male', '3052857413', 'jusuario@cweb.com', '4b67deeb9aba04a5b54632ad19934f26', '0203-05-12', 'Calle 15 18 49', 'uploads/client-6.png?v=1642187703', 0, '2022-01-14 14:00:34', '2022-01-14 14:15:03'),
(7, 'Samuel', '', 'Morales', 'Male', '3205874631', 'smorales@cweb.com', '4b67deeb9aba04a5b54632ad19934f26', '2001-06-05', 'Calle 32 N 34 21', 'uploads/client-7.png?v=1642817941', 0, '2022-01-21 21:11:36', '2022-01-21 21:19:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `history_list`
--

CREATE TABLE `history_list` (
  `id` int(30) NOT NULL,
  `appointment_id` int(30) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `remarks` text NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `history_list`
--

INSERT INTO `history_list` (`id`, `appointment_id`, `status`, `remarks`, `date_created`) VALUES
(2, 1, 1, 'Appointment has been approved.', '2022-01-11 15:47:27'),
(10, 3, 1, 'Appointment has been approved.', '2022-01-11 17:03:08'),
(13, 7, 1, 'Se confirma examen realizado exitosamente.', '2022-01-14 14:32:00'),
(15, 7, 2, 'Muestra recogida sin inconvenientes', '2022-01-14 14:32:56'),
(16, 7, 4, 'Se finaliza el proceso exitósamente', '2022-01-14 14:33:26'),
(17, 7, 6, 'Se se entrega el resultado de la prueba realizada', '2022-01-14 14:36:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `system_info`
--

CREATE TABLE `system_info` (
  `id` int(30) NOT NULL,
  `meta_field` text NOT NULL,
  `meta_value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `system_info`
--

INSERT INTO `system_info` (`id`, `meta_field`, `meta_value`) VALUES
(1, 'name', 'Laboratorio de Diagnóstico en Línea'),
(6, 'short_name', 'LDL'),
(11, 'logo', 'uploads/logo-1642814059.png'),
(13, 'user_avatar', 'uploads/user_avatar.jpg'),
(14, 'cover', 'uploads/cover-1642814059.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test_list`
--

CREATE TABLE `test_list` (
  `id` int(30) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `cost` float NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `delete_flag` tinyint(1) NOT NULL DEFAULT 0,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `test_list`
--

INSERT INTO `test_list` (`id`, `name`, `description`, `cost`, `status`, `delete_flag`, `date_created`, `date_updated`) VALUES
(1, 'Tomografía Computarizada', 'Una tomografía computarizada (TC) es un tipo de radiografía que crea imágenes tridimensionales de su cuerpo, incluidos huesos, órganos, tejidos y tumores. La máquina se mueve en un movimiento circular a su alrededor y toma radiografías de cortes muy delgados de su cuerpo para crear una imagen transversal.', 2500, 1, 0, '2022-01-11 10:20:35', '2022-01-21 23:55:59'),
(2, 'Electrocardiograma (ECG)', 'Un ECG es un gráfico de la actividad eléctrica de su corazón. Es una prueba segura. No hay riesgo de electrocutarse.', 1500, 1, 0, '2022-01-11 10:21:20', '2022-01-21 23:57:31'),
(3, 'Escaneo de imágenes por resonancia magnética (IRM)', 'Una resonancia magnética nuclear (RMN) toma imágenes detalladas del interior del cuerpo. Puede presentar problemas en los tejidos blandos sin necesidad de cirugía. También es útil para planificar algunos tratamientos de las mismas zonas.', 2500, 1, 0, '2022-01-11 10:22:06', '2022-01-21 23:58:50'),
(4, 'Rayos X', 'Una radiografía usa radiación para crear una imagen del interior del cuerpo. El haz de rayos X es absorbido de manera diferente por varias estructuras del cuerpo, como huesos y tejidos blandos, y esto se usa para crear la imagen. La radiografía también se conoce como radiografía.', 750, 1, 0, '2022-01-11 10:22:41', '2022-01-22 00:01:16'),
(5, 'Ecografía', 'Una ecografía crea una imagen en tiempo real del interior del cuerpo mediante ondas sonoras. El ultrasonido es generalmente indoloro y no invasivo. El ultrasonido funciona de manera diferente a los rayos X en que no usa radiación.', 1500, 1, 0, '2022-01-11 10:23:07', '2022-01-22 00:00:24'),
(6, 'Sample 101', ' To Be Deleted', 123, 0, 1, '2022-01-11 10:23:18', '2022-01-11 10:23:38'),
(7, '', '', 0, 1, 1, '2022-01-22 00:42:30', '2022-01-22 00:42:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `middlename` text DEFAULT NULL,
  `lastname` varchar(250) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `avatar` text DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT 0,
  `status` int(1) NOT NULL DEFAULT 1 COMMENT '0=not verified, 1 = verified',
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstname`, `middlename`, `lastname`, `username`, `password`, `avatar`, `last_login`, `type`, `status`, `date_added`, `date_updated`) VALUES
(1, 'Mauricio', NULL, 'Sevilla', 'configuroweb', '4b67deeb9aba04a5b54632ad19934f26', 'uploads/avatar-1.png?v=1642188026', NULL, 1, 1, '2021-01-20 14:02:37', '2022-01-14 14:20:26'),
(6, 'Juan', NULL, 'Usuario', 'jusuario', '4b67deeb9aba04a5b54632ad19934f26', 'uploads/avatar-6.png?v=1642905046', NULL, 2, 1, '2022-01-08 16:04:17', '2022-01-22 21:30:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointment_list`
--
ALTER TABLE `appointment_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indices de la tabla `appointment_test_list`
--
ALTER TABLE `appointment_test_list`
  ADD KEY `appointment_id` (`appointment_id`),
  ADD KEY `test_id` (`test_id`);

--
-- Indices de la tabla `client_list`
--
ALTER TABLE `client_list`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `history_list`
--
ALTER TABLE `history_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`,`appointment_id`),
  ADD KEY `appointment_id` (`appointment_id`);

--
-- Indices de la tabla `system_info`
--
ALTER TABLE `system_info`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `test_list`
--
ALTER TABLE `test_list`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `appointment_list`
--
ALTER TABLE `appointment_list`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `client_list`
--
ALTER TABLE `client_list`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `history_list`
--
ALTER TABLE `history_list`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `system_info`
--
ALTER TABLE `system_info`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `test_list`
--
ALTER TABLE `test_list`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `appointment_list`
--
ALTER TABLE `appointment_list`
  ADD CONSTRAINT `appointment_list_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client_list` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `appointment_test_list`
--
ALTER TABLE `appointment_test_list`
  ADD CONSTRAINT `appointment_test_list_ibfk_1` FOREIGN KEY (`appointment_id`) REFERENCES `appointment_list` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `appointment_test_list_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `test_list` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `history_list`
--
ALTER TABLE `history_list`
  ADD CONSTRAINT `history_list_ibfk_1` FOREIGN KEY (`appointment_id`) REFERENCES `appointment_list` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
