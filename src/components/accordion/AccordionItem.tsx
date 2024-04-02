import Accordion from "../../types/Accordion";

export default function AccordionItem(props: Accordion) {
	return (
		<div className="accordion__item">
			<div className="faq__question">{props.question}</div>
			<div className="faq__answer">{props.answer}</div>
			<div className="faq__seperator"></div>
		</div>
	);
}
