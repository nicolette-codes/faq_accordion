import Accordion from "../../types/Accordion";

interface AccordionItemProps {
	items: Accordion;
	onVisibilityChange(id: number): void;
}

export default function AccordionItem({
	items,
	onVisibilityChange,
}: AccordionItemProps) {
	return (
		<div className="accordion__panel">
			<h2 id={`panel-${items.id}-heading`}>
				<button
					className="accordion__title accordion--trigger"
					aria-controls={`panel-${items.id}-content`}
					aria-expanded={items.isOpen}
					onClick={() => onVisibilityChange(items.id)}
				>
					<div id="panel-1-title">{items.question}</div>
					{items.isOpen ? (
						<img
							aria-hidden="true"
							src="../../../src/assets/images/icon-minus.svg"
							alt="Minus icon to close the answer."
							className="icon"
						/>
					) : (
						<img
							aria-hidden="true"
							src="../../../src/assets/images/icon-plus.svg"
							alt="Plus icon to open the answer."
							className="icon"
						/>
					)}
				</button>
			</h2>
			<div
				id={`panel-${items.id}-content`}
				className="accordion__content"
				aria-labelledby={`panel-${items.id}-heading`}
				aria-hidden={items.isOpen}
				role="region"
			>
				<div>
					<p>{items.answer}</p>
				</div>
			</div>
		</div>
	);
}
