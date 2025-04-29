/**
 * Converts an array of objects into an array of { value, label } objects.
 * @param {Array} data - The source array.
 * @param {String} valueKey - Key for the 'value'.
 * @param {String} labelKey - Key for the 'label'.
 * @returns {Array} Transformed array.
 */
export const mapToValueLabel = (data, valueKey, labelKey) => {
    if (!Array.isArray(data)) return [];
  
    return data.map(item => ({
      value: item[valueKey],
      label: item[labelKey],
    }));
  }


  /**
 * Given an array of IDs, return full objects from the data that match the IDs.
 * @param {Array} data - The source array of objects.
 * @param {Array} ids - The array of ID values to match.
 * @param {String} key - The key in each object to match against IDs.
 * @returns {Array} Filtered array of matching objects.
 */
export const getObjectsByIds = (data, ids, key = 'id') => {
    if (!Array.isArray(data) || !Array.isArray(ids)) return [];
  
    const idSet = new Set(ids); // for faster lookup
    return data.filter(item => idSet.has(item[key]));
  };
  