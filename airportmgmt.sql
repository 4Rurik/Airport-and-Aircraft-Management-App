-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2023 at 04:32 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `airportmgmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `aircraft`
--

CREATE TABLE `aircraft` (
  `id` int(11) NOT NULL,
  `airline` varchar(30) NOT NULL,
  `aircraft_registration` varchar(6) NOT NULL,
  `capacity` int(11) NOT NULL,
  `aircraft_status` varchar(15) NOT NULL DEFAULT 'Available',
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aircraft`
--

INSERT INTO `aircraft` (`id`, `airline`, `aircraft_registration`, `capacity`, `aircraft_status`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Copa Airlines', 'AR1030', 200, 'Unavailable', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Avianca Airlines', 'V69420', 124, 'On Gate', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Copa Airlines', 'AR1030', 200, 'Unavailable', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Invisible Airlines', 'NA0000', 0, 'Unavailable', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Invisible Airlines', 'NA0000', 0, 'Available', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `gates`
--

CREATE TABLE `gates` (
  `id` int(11) NOT NULL,
  `gate` varchar(10) NOT NULL,
  `availability` tinyint(1) NOT NULL DEFAULT 1,
  `aircraft_id` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gates`
--

INSERT INTO `gates` (`id`, `gate`, `availability`, `aircraft_id`, `active`, `created_at`, `updated_at`) VALUES
(1, 'One', 0, 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Dos', 0, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Tres', 0, 5, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Cuatro', 0, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Cinco', 0, NULL, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aircraft`
--
ALTER TABLE `aircraft`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gates`
--
ALTER TABLE `gates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aircraft_id` (`aircraft_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aircraft`
--
ALTER TABLE `aircraft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gates`
--
ALTER TABLE `gates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gates`
--
ALTER TABLE `gates`
  ADD CONSTRAINT `gates_ibfk_1` FOREIGN KEY (`aircraft_id`) REFERENCES `aircraft` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
