CREATE TABLE `saved_items` (
	`user_id` text NOT NULL,
	`kind` text NOT NULL,
	`item_id` text NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`saved_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	PRIMARY KEY(`user_id`, `kind`, `item_id`)
);
--> statement-breakpoint
CREATE INDEX `idx_saved_user_time` ON `saved_items` (`user_id`,`saved_at`);