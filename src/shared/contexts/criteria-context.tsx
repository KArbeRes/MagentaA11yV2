import { ContentTab } from 'components/content-display/markdown-content/markdown-content.types';
import React, { createContext, ReactNode, useContext } from 'react';
import { CriteriaType } from 'shared/types/shared-types';

const LOCAL_STORAGE_KEY: string = 'savedCriteria';

interface SavedCriteria extends ContentTab {
  id: string;
  criteria: CriteriaType;
  savedAt: Date;
}

interface CriteriaContextType {
  savedCriteria: SavedCriteria[];
  saveCriteria: (criteria: SavedCriteria) => void;
  removeCriteria: (id: string) => void;
  findCriteria: (searchTerm: string) => SavedCriteria[];
  clearCriteria: (label: CriteriaType) => void;
}

const CriteriaContext = createContext<CriteriaContextType | undefined>(
  undefined
);

const saveToLocalStorage = (criteria: SavedCriteria[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(criteria));
  } catch (error) {
    console.error('Failed to save criteria to localStorage:', error);
  }
};

const getInitialSavedCriteria = (): SavedCriteria[] => {
  try {
    const storedCriteria = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCriteria ? JSON.parse(storedCriteria) : [];
  } catch (error) {
    console.error('Failed to load criteria from localStorage:', error);
    return [];
  }
};

const useSavedCriteria = () => {
  const [savedCriteria, setSavedCriteria] = React.useState<SavedCriteria[]>(
    getInitialSavedCriteria
  );

  const saveCriteria = React.useCallback((criteria: SavedCriteria) => {
    setSavedCriteria((prev) => {
      if (
        !prev.some(
          (item) =>
            item.label === criteria.label && item.content === criteria.content
        )
      ) {
        const updatedCriteria = [...prev, criteria];
        saveToLocalStorage(updatedCriteria);
        return updatedCriteria;
      }
      return prev;
    });
  }, []);

  const removeCriteria = React.useCallback((id: string) => {
    setSavedCriteria((prev) => {
      const updatedCriteria = prev.filter((item) => item.id !== id);
      saveToLocalStorage(updatedCriteria);
      return updatedCriteria;
    });
  }, []);

  const clearCriteria = React.useCallback((criteriaType: CriteriaType) => {
    setSavedCriteria((prev) => {
      const updatedCriteria = prev.filter(
        (item) => item.criteria !== criteriaType
      );
      saveToLocalStorage(updatedCriteria);
      return updatedCriteria;
    });
  }, []);

  const filteredCriteria = React.useMemo(() => {
    return savedCriteria.map((item) => ({
      ...item,
      lowerLabel: item.label.toLowerCase(),
    }));
  }, [savedCriteria]);

  const findCriteria = (searchTerm: string): SavedCriteria[] => {
    const term = searchTerm.toLowerCase();
    return filteredCriteria.filter((item) => item.lowerLabel.includes(term));
  };

  return {
    savedCriteria,
    saveCriteria,
    removeCriteria,
    findCriteria,
    clearCriteria,
  };
};

export const CriteriaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const criteria = useSavedCriteria();

  return (
    <CriteriaContext.Provider value={criteria}>
      {children}
    </CriteriaContext.Provider>
  );
};

export const useCriteria = () => {
  const context = useContext(CriteriaContext);
  if (!context) {
    throw new Error('useCriteria must be used within a CriteriaProvider');
  }
  return context;
};
