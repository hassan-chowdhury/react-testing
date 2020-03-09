const findByTestAttribute = (component, attr) => component.find(`[test="${attr}"]`);

export { findByTestAttribute as default };
