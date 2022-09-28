/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	// const {
	// 	sliderId,
	// 	images,
	// 	loop,
	// 	speed,
	// 	autoplay,
	// 	reverseAutoplayDirection,
	// 	autoplayDelay,
	// 	pauseOnHover,
	// 	keyboard,
	// 	mousewheel,
	// 	autoHeight,
	// 	slideDirection,
	// 	showNav,
	// 	showPagination,
	// 	deskItemsPerView,
	// 	tabItemsPerView,
	// 	phoneItemsPerView,
	// 	deskSpace,
	// 	tabSpace,
	// 	phoneSpace,
	// 	showCaption,
	// 	captionVisibility,
	// 	captionBg,
	// 	captionColor,
	// 	borderWidth,
	// 	borderColor,
	// 	borderStyle,
	// 	borderRadius,
	// 	logoHoverStyle,
	// } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<h2>{__('Carousel Block', 'advanced-carousel-block')}</h2>
		</div>
	);
}
