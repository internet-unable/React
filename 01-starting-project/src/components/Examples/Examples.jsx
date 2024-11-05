import { useState } from 'react';

import Section from '../Section/Section.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import TabButton from '../TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedBtn) {
        setSelectedTopic(selectedBtn);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            onClick={() => handleSelect('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            onClick={() => handleSelect('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            onClick={() => handleSelect('state')}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {!selectedTopic ? (
                    <p>Please select a topic</p>
                ) : (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                )}
            </Tabs>
        </Section>
    );
}