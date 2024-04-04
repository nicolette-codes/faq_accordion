import AccordionItem from "./AccordionItem";
import type Accordion from "../../types/Accordion";
import { useState } from "react";

const accordionArray: Accordion[] = [
	{
		id: 1,
		question: "What is Frontend Mentor, and how will it help me?",
		answer: `Frontend Mentor offers realistic coding challenges to help
			developers improve their frontend coding skills with projects in
			HTML, CSS, and JavaScript. It's suitable for all levels and ideal
			for portfolio building.`,
		isOpen: true,
	},

	{
		id: 2,
		question: "Is Frontend Mentor free?",
		answer: `Yes, Frontend Mentor offers both free and
			premium coding challenges, with the free option providing access to
			a range of projects suitable for all skill levels.`,
		isOpen: false,
	},
	{
		id: 3,
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer: `Yes, you can use projects completed on Frontend Mentor in your
			portfolio. It's an excellent way to showcase your skills to
			potential employers!`,
		isOpen: false,
	},
	{
		id: 4,
		question:
			"How can I get help if I'm stuck on a Frontend Mentor challenge?",
		answer: `The best place to get help is inside Frontend Mentor's Discord
			community. There's a help channel where you can ask questions and
			seek support from other community members.`,
		isOpen: false,
	},
];

export default function FaqAccordion() {
	const [faqs, setFaqs] = useState(accordionArray);

	function toggleVisibility(id: number) {
		setFaqs((faqs) =>
			faqs.map((faq) =>
				faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq,
			),
		);
	}

	return (
		<section className="accordion">
			<div className="accordion__header">
				<img
					src="icon-star.svg"
					alt="Purple 4 sided star icon."
					className="icon"
				/>
				<h1 className="accordion__heading">FAQs</h1>
			</div>
			{faqs.map((faqItem) => {
				return (
					<AccordionItem
						onVisibilityChange={toggleVisibility}
						items={faqItem}
						key={faqItem.id}
					/>
				);
			})}
		</section>
	);
}
